import { Friend } from "./friend";

export interface FriendRequest {
    // The UUID representing this friend request.
    UUID: string
    // The friendship this friend request relates to.
    Friendship: Friend,
    // The current status of the friend request.
    Status: 'ACCEPTED' | 'PENDING' | 'DENIED'
    // When the friend request was initialised.
    CreatedAt: bigint,

    accept(): boolean,
    deny(): boolean,
    delete(): boolean,
}