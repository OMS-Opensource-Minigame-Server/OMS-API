import { DataTypes } from "sequelize"
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "Rank"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    Colour: {
        type: DataTypes.CHAR(24).BINARY,
        defaultValue: 111111111111111111111111
    },
    Title: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    Priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

export {
    ModelName,
    Model
}