import { Friend } from "./friend";
import { Rank } from "./rank";
import { CurrencyHeld } from "./currency";
import { FriendRequest } from "./friendRequest";

export interface Player {

    // // Base Player Details \\ \\
    // UUID of the players account. Primary Key.
    UUID: string,
    // Last username the player appeared as. Indexed.
    Username: string,
    CreatedAt: bigint,
    LastUpdated: bigint,

    // // Player Social \\ \\
    // Get the friends that a player currently holds.
    PlayerFriends: Array<Friend>,
    addFriend(UUID: string): boolean //-> Makes a friend request.
    getFriend(UUID: string): Friend,
    getFriends(): Array<Friend>,
    updateFriend(): void, //-> This returns void.
    deleteFriend(friend: Friend): boolean

    PlayerFriendRequests: Array<FriendRequest>,
    addFriendRequest(friendRequest: FriendRequest): boolean,
    getFriendRequest(UUID: string): FriendRequest,
    getFriendRequests(): Array<FriendRequest>
    updateFriendRequest(friendRequest: FriendRequest): boolean,
    deleteFriendRequest(friendRequest: FriendRequest): boolean,

    // // Player Currency \\ \\
    // Get the currency that a player currently holds.
    PlayerCurrencies: Array<CurrencyHeld>,
    addCurrency(currency: CurrencyHeld): boolean,
    getCurrency(UUID: string): CurrencyHeld,
    getCurrencies(): Array<CurrencyHeld>,
    updateCurrency(currency: CurrencyHeld): boolean,
    deleteCurrency(currency: Rank): boolean,

    // // Player Rank \\ \\
    // Get the current rank of the player.
    PlayerRank: Array<Rank>,
    addRank(rank: Rank): boolean,
    getRank(UUID: string): Rank,
    getRanks(): Array<Rank>
    updateRank(rank: Rank): boolean,
    deleteRank(rank: Rank): boolean,
}