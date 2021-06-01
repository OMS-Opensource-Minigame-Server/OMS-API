import {
    Column,
    ForeignKey,
    IsUUID,
    Model,
    NotNull,
    Table,
    BelongsTo,
    PrimaryKey,
    AllowNull,
    HasMany
} from "sequelize-typescript";
import CurrencyName from "./currencyName";
import CurrencyConversionRatio from "./currencyConversionRatio";

const ModelName = "currency"

@Table
export default class Currency extends Model {

    @IsUUID(4)
    @PrimaryKey
    @NotNull
    @Column({allowNull: false})
    uuid!: string;

    @ForeignKey(()=>CurrencyName)
    @NotNull
    @IsUUID(4)
    @Column({allowNull: false})
    nameID!: string

    @AllowNull
    @Column
    prefix!: string;

    @AllowNull
    @Column
    postfix!: string;

    @HasMany(()=>CurrencyConversionRatio)
    conversionRatios!: CurrencyConversionRatio[]
}

export {
    ModelName,
    Model
}