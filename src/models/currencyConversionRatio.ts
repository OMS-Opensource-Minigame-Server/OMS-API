import {Column, ForeignKey, IsUUID, Model, NotNull, Table, BelongsTo, PrimaryKey, AllowNull} from "sequelize-typescript";
import Currency from "./currency";

@Table
export default class CurrencyConversionRatio extends Model {
    @IsUUID(4)
    @PrimaryKey
    @NotNull
    @Column({allowNull: false})
    uuid!: string;

    @ForeignKey(()=>Currency)
    @IsUUID(4)
    @Column({allowNull: false})
    currencyID!: string;

    @BelongsTo(()=>Currency)
    currency!: Currency;

    @ForeignKey(()=>Currency)
    @IsUUID(4)
    @Column({allowNull: false})
    finalCurrencyID!: string;

    @BelongsTo(()=>Currency)
    finalCurrency!: Currency;

    @NotNull
    @Column({allowNull: false})
    conversionRatio!: number;
}