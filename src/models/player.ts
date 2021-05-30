import { DataTypes } from "sequelize"
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "Player"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Username: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    PlayerFriends: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
        allowNull: true
    },
    PlayerFriendRequests: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
        allowNull: true
    },
    PlayerCurrencies: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
        allowNull: true
    },
    PlayerRank: {
        type: DataTypes.ARRAY(DataTypes.UUIDV4),
        allowNull: true
    }
}

export {
    ModelName,
    Model
}