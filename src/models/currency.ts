import { DataTypes } from "sequelize"
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "Currency"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Name: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Prefix: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    Postfix: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    ConversionRatio: {
        type: DataTypes.UUIDV4,
        allowNull: true
    }
}

export {
    ModelName,
    Model
}