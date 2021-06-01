import {Column, ForeignKey, IsUUID, Model, NotNull, Table, BelongsTo, Default} from "sequelize-typescript";
import Player from "./player";

export enum FriendshipStatus {
    ACCEPTED,
    PENDING,
    DENIED
}

@Table
export default class Friend extends Model {

    @ForeignKey(()=>Player)
    @Column
    playerID!: string;

    @ForeignKey(()=>Player)
    @Column
    friendID!: string;

    @Default(FriendshipStatus.PENDING)
    @Column
    status!: FriendshipStatus
}