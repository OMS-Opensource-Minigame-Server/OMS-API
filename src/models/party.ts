import {AllowNull, Column, HasMany, IsUUID, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import {Player} from "./player";

@Table
export default class Party extends Model {

    @IsUUID(4)
    @PrimaryKey
    @NotNull
    @Column({allowNull: false})
    uuid!: string;

    @NotNull
    @Column({allowNull: false})
    name!: string;

    @HasMany(()=>Player)
    players!: Player[]
}