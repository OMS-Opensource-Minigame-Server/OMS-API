import {Column, ForeignKey, IsUUID, Model, NotNull, Table, BelongsTo, PrimaryKey, AllowNull} from "sequelize-typescript";
import Currency from "./currency";

const ModelName = "currency_held"

@Table
export default class CurrencyHeld extends Model {
    @IsUUID(4)
    @PrimaryKey
    @NotNull
    @Column({allowNull: false})
    uuid!: string;

    @ForeignKey(()=>Currency)
    @IsUUID(4)
    @NotNull
    @Column({allowNull: false})
    currencyID!: string;

    @BelongsTo(()=>Currency)
    currency!: Currency;

    @AllowNull
    @Column
    amount!: number;
}

export {
    ModelName,
    Model
}