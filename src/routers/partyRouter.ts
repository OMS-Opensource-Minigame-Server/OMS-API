import {Request, Response, Router} from "express";
import { validate as uuidValidate, v4 as uuid } from "uuid";
import Party from "../models/party";
import Player from "../models/player";

const pathRouter = Router()
const pathBase = '/party'

pathRouter.get(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const partyUUID: string = request.params.uuid || ''
    if(!uuidValidate(partyUUID)){
        response
            .status(400)
            .json({error: `The specified UUID ${JSON.stringify(partyUUID)} is invalid!`})
            .end()
    }else{
        const party: Party | null = await Party.findOne({include: ["players"], where: {uuid: partyUUID }})
        if(party === null){
            response
                .status(404)
                .json({error: `The specified UUID ${JSON.stringify(partyUUID)} does not exist!`})
                .end()
        }else{
            response
                .status(200)
                .json(party)
                .end()
        }
    }
})

pathRouter.get(`${pathBase}`, async (request: Request, response: Response)=>{
    const parsedOffset: number = Number(request.query.offset)
    const offset: number = parsedOffset >= 0 ? parsedOffset : 0

    const parsedLimit: number = Number(request.query.limit)
    const limit: number = parsedLimit <= 50 && parsedLimit > 0 ?  parsedLimit : 10

    const partyResponse: {rows: Party[], count: number} = await Party.findAndCountAll({include: ["players"],offset, limit})

    response
        .status(200)
        .json(partyResponse)
        .end()
})

pathRouter.post(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const partyUUID: string = request.params.uuid || request.body.uuid || uuid()
    const partyUUIDValid = uuidValidate(partyUUID)
    if(!partyUUIDValid){
        response
            .status(400)
            .json({error: `The specified UUID '${JSON.stringify(partyUUID)}' is invalid!`})
            .end()
    }else{
        const [party, partyBuilt] = await Party.findOrBuild({
            where: {uuid: partyUUID},
            defaults: {
            }
        })
        // Party already exists, don't save and return error.
        if(!partyBuilt){
            response
                .status(400)
                .json({error: `The specified UUID '${JSON.stringify(partyUUID)}' already exists!`})
                .end()
        }else{
            await party.save()
            response
                .status(200)
                .json(party)
                .end()
        }

    }
})

pathRouter.patch(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const partyUUID: string = request.params.uuid || request.body.uuid || ''
    const partyUUIDValid = uuidValidate(partyUUID)
    if(partyUUIDValid){
        const party: Party | null = await Party.findOne({where: {uuid: partyUUID}, include: ["players"]})
        if(party){
            // Pick the fields which are allowed to be updated via the API.
            const partyUpdate = {
                name: request.body.name,
                players: request.body.players
            }
            await party.update(partyUpdate)
            response
                .status(200)
                .json(party)
                .end()
        }else{
            response
                .status(400)
                .json({error: `The specified UUID '${JSON.stringify(partyUUID)}' doesn't exist!`})
                .end()
        }
    }else{
        response
            .status(400)
            .json({error: `The specified UUID '${JSON.stringify(partyUUID)}' is invalid!`})
            .end()
    }
})

pathRouter.delete(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const partyUUID: string = request.params.uuid || request.body.uuid || ''
    const partyUUIDValid = uuidValidate(partyUUID)
    if(partyUUIDValid){
        const party: Party | null = await Party.findOne({where:{uuid: partyUUID}})
        if(party){
            await party.destroy()
            response
                .status(200)
                .end()
        }else{
            response
                .status(404)
                .json({error: `The specified UUID '${JSON.stringify(partyUUID)}' doesn't exist!`})
                .end()
        }
    }else{
        response
            .status(400)
            .json({error: `The specified UUID '${JSON.stringify(partyUUID)}' is invalid exist!`})
            .end()
    }
})

pathRouter.delete(`${pathBase}/:uuid/player/:partymemberuuid`, async (request: Request, response: Response)=>{
    const partyUUID: string = request.params.uuid || ''
    const partyMemberUUID: string = request.params.partymemberuuid || ''
    if(!uuidValidate(partyUUID)){
        response
            .status(400)
            .json({error: `The specified party UUID ${JSON.stringify(partyUUID)} is invalid!`})
            .end()
    }else if (!uuidValidate(partyMemberUUID)){
        response
            .status(400)
            .json({error: `The specified party member UUID ${JSON.stringify(partyMemberUUID)} is invalid!`})
            .end()
    } else{
        const party: Party | null = await Party.findOne({include: ["players"], where: {uuid: partyUUID }})
        if(party === null){
            response
                .status(404)
                .json({error: `The specified UUID ${JSON.stringify(partyUUID)} does not exist!`})
                .end()
        }else{
            const partyMember: Player[] = party.players.filter((partyPlayer)=>{
                return partyPlayer.uuid === partyMemberUUID
            })
            if(partyMember.length){
                await party.$remove("players", partyMember)
                response
                    .status(200)
                    .end()
            }else{
                response
                    .status(404)
                    .json({error: `The specified UUID ${JSON.stringify(partyUUID)} isn't part of the party!`})
                    .end()
            }
        }
    }
})

export {
    pathRouter
}