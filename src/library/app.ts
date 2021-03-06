import Express from "express"
import * as Routers from "../routers"
import * as Utils from "./utils"
import { database } from './sequelize'
import Rank from "../models/rank";
import {v4 as uuid} from "uuid";
import Player from "../models/player";
import Friend from "../models/friend";
import Party from "../models/party";

const app = Express()
app.use(Express.json())

for(const [routerKey, router] of Object.entries(Routers)){
    Utils.logRoutes(routerKey, router)
    app.use(router)
}

(async ()=>{
    await database.sync();

    const rank: Rank = new Rank({uuid:uuid(), name: "default", title: "Default"});
    await rank.save();

    const player: Player | null = new Player( {uuid: uuid(), username: "test", rankId: rank.uuid});
    await player.save();

    for(let i=0; i<=50; i++){
        const party: Party | null = new Party({uuid: uuid(), name: `Test Party ${i}`})
        await party.save()

        const player2: Player | null = new Player( {uuid: uuid(), username: `test ${i}`, rankId: rank.uuid, partyId: party.uuid});
        await player2.save();

        const friendship: Friend = new Friend({playerID: player.uuid, friendID: player2.uuid})
        await friendship.save()
    }

    // player = await Player.findOne({include: [Rank, "friendsSent", "friendsReceived"], where: {username: player.username}});
    // console.log(JSON.stringify(player?.friends));
})();

export {
    app
}
