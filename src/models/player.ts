import {
    AllowNull,
    BelongsTo, BelongsToMany,
    Column,
    ForeignKey,
    HasMany, HasOne,
    IsUUID,
    Model,
    NotNull,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Party from "./party";
import Rank from "./rank";
import Friend from "./friend";

const ModelName = "player"

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
    friends!: Player[];

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
    rankID!: string;

    @BelongsTo(()=>Rank)
    rank!: Rank;
}