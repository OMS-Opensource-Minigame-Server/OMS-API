import { DataTypes } from "sequelize";
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "CurrencyHeld"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Currency: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}

export {
    ModelName,
    Model
}