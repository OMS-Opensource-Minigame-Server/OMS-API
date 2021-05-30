import { DataTypes } from "sequelize"
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "Party"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    Members: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
        allowNull: false
    }
}

export {
    ModelName,
    Model
}