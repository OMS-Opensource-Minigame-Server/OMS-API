import { Player } from "./player";

export interface Party {
    // UUID of the party. Primary Key.
    PartyID: string,
    // Name of the party.
    Name: string
    // Members of the party.
    Members: Array<Player>,
    // Created At time of the party.
    CreatedAt: bigint

    addPlayer(player: Player): boolean,
    getPlayer(): Player,
    getPlayerS(): Array<Player>
    removePlayer(player: Player): boolean,

}