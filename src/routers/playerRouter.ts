import { Router, Request, Response } from "express";
import { validate as uuidValidate } from "uuid";
import { validateMinecraftUsername } from "../library/utils";
import Player from "../models/player";
import Rank from "../models/rank";

const pathRouter = Router()
const pathBase = '/player'

pathRouter.get(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const playerUUID: string = request.params.uuid || ''
    if(!uuidValidate(playerUUID)){
        response
            .status(400)
            .json({error: `The specified UUID ${JSON.stringify(playerUUID)} is invalid!`})
            .end()
    }else{
        const player: Player | null = await Player.findOne({where: {uuid: playerUUID }})
        if(player === null){
            response
                .status(404)
                .json({error: `The specified UUID ${JSON.stringify(playerUUID)} does not exist!`})
                .end()
        }else{
            response
                .status(200)
                .json(player)
                .end()
        }
    }
})

pathRouter.get(`${pathBase}`, async (request: Request, response: Response)=>{
    const parsedOffset: number = Number(request.query.offset)
    const offset: number = parsedOffset >= 0 ? parsedOffset : 0

    const parsedLimit: number = Number(request.query.limit)
    const limit: number = parsedLimit <= 50 && parsedLimit > 0 ?  parsedLimit : 10

    const playerResponse: {rows: Player[], count: number} = await Player.findAndCountAll({offset, limit})

    response
        .status(200)
        .json(playerResponse)
        .end()
})

pathRouter.post(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const playerUUID: string = request.params.uuid || request.body.uuid || ''
    const playerUUIDValid = uuidValidate(playerUUID)
    if(!playerUUIDValid){
        response
            .status(400)
            .json({error: `The specified UUID '${JSON.stringify(playerUUID)}' is invalid!`})
            .end()
    }else{
        const playerUsername: string = String(request.query.username)
        const playerUsernameValid: boolean = validateMinecraftUsername(playerUsername)
        const defaultRank: Rank | null =  await Rank.findOne({where: {name: "default"}})
        if(playerUsernameValid){
            const [player, playerBuilt] = await Player.findOrBuild({
                where: {uuid: playerUUID},
                defaults: {
                    username: playerUsername,
                    rankID: defaultRank?.uuid
                }
            })
            // Player already exists, don't save and return error.
            if(!playerBuilt){
                response
                    .status(400)
                    .json({error: `The specified UUID '${JSON.stringify(playerUUID)}' already exists!`})
                    .end()
            }else{
                await player.save()
                response
                    .status(200)
                    .json(player)
                    .end()
            }
        }else{
            response
                .status(400)
                .json({error: `The specified username '${JSON.stringify(playerUsername)}' is invalid!`})
                .end()
        }

    }
})

pathRouter.patch(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const playerUUID: string = request.params.uuid || request.body.uuid || ''
    const playerUUIDValid = uuidValidate(playerUUID)
    if(playerUUIDValid){
        const player: Player | null = await Player.findOne({where: {uuid: playerUUID}})
        if(player){
            // Pick the fields which are allowed to be updated via the API.
            const playerUpdate = {
                username: request.body.username,
                partyId: request.body.partyId,
                rankId: request.body.rankId
            }
            await player.update(playerUpdate)
            response
                .status(200)
                .json(player)
                .end()
        }else{
            response
                .status(400)
                .json({error: `The specified UUID '${JSON.stringify(playerUUID)}' doesn't exist!`})
                .end()
        }
    }else{
        response
            .status(400)
            .json({error: `The specified UUID '${JSON.stringify(playerUUID)}' is invalid!`})
            .end()
    }
})

pathRouter.delete(`${pathBase}/:uuid`, async (request: Request, response: Response)=>{
    const playerUUID: string = request.params.uuid || request.body.uuid || ''
    const playerUUIDValid = uuidValidate(playerUUID)
    if(playerUUIDValid){
        const player: Player | null = await Player.findOne({where:{uuid: playerUUID}})
        if(player){
            await player.destroy()
            response
                .status(200)
                .end()
        }else{
            response
                .status(404)
                .json({error: `The specified UUID '${JSON.stringify(playerUUID)}' doesn't exist!`})
                .end()
        }
    }else{
        response
            .status(400)
            .json({error: `The specified UUID '${JSON.stringify(playerUUID)}' is invalid exist!`})
            .end()
    }
})

export {
    pathRouter
}