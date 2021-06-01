import {Column, ForeignKey, IsUUID, Model, NotNull, Table, BelongsTo, PrimaryKey, AllowNull} from "sequelize-typescript";

const ModelName = "currency_name"

@Table
export default class CurrencyName extends Model {

    @IsUUID(4)
    @PrimaryKey
    @NotNull
    @Column({allowNull: false})
    uuid!: string;

    @NotNull
    @Column({allowNull: false})
    singular!: string;

    @NotNull
    @Column({allowNull: false})
    plural!: string;
}

export {
    ModelName,
    Model
}