import { DataTypes } from "sequelize"
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "CurrencyName"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Singular: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Plural: {
        type: DataTypes.CHAR,
        allowNull: false
    }
}

export {
    ModelName,
    Model
}