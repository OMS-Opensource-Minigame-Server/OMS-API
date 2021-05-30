import { DataTypes } from "sequelize";
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "CurrencyConversionRatio"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Currency: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    FinalCurrency: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    ConversionRatio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

export {
    ModelName,
    Model
}