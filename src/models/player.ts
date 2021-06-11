import {
    AllowNull,
    BelongsTo, BelongsToMany,
    Column,
    ForeignKey,
    IsUUID,
    Model,
    NotNull,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Party from "./party";
import Rank from "./rank";
import Friend from "./friend";

@Table
export default class Player extends Model {
    @PrimaryKey
    @IsUUID(4)
    @NotNull
    @Column({allowNull: false})
    uuid!: string;

    @NotNull
    @Column({allowNull: false})
    username!: string;

    @BelongsToMany(()=>Player, ()=>Friend,"playerID", "friendID")
    friendsSent!: Player[];
    @BelongsToMany(()=>Player, ()=>Friend,"friendID", "playerID")
    friendsReceived!: Player[];

    get friends(): Player[] {
        return [...this.friendsSent,...this.friendsReceived];
    }

    @ForeignKey(()=>Party)
    @IsUUID(4)
    @AllowNull
    @Column
    partyId!: string;

    @BelongsTo(()=>Party)
    party!: Party;

    @ForeignKey(()=>Rank)
    @IsUUID(4)
    @NotNull
    @Column({allowNull: false})
    rankId!: string;

    @BelongsTo(()=>Rank)
    rank!: Rank;
}