import { DataTypes } from "sequelize"
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "FriendRequest"

const Model: ModelAttributes = {
    UUID: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Friendship: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    Status: {
        type: DataTypes.ENUM(
            'ACCEPTED',
            'PENDING',
            'DENIED'
        ),
        defaultValue: 'PENDING',
        allowNull: false
    }
}

export {
    ModelName,
    Model
}