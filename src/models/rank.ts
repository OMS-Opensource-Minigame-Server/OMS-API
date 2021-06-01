import {AllowNull, Column, Default, HasMany, IsUUID, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class Rank extends Model {

    @PrimaryKey
    @IsUUID(4)
    @NotNull
    @Column({allowNull: false})
    uuid!: string;

    @NotNull
    @Column({allowNull: false})
    name!: string;

    @NotNull
    @Default(0)
    @Column({allowNull: false})
    colour!: number;

    @NotNull
    @Column({allowNull: false})
    title!: string;

//    @Column
//    @NotNull
//    priority: number;
}