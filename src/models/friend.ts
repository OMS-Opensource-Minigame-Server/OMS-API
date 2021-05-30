import { DataTypes } from "sequelize"
import {ModelAttributes} from "sequelize/types/lib/model";

const ModelName = "Friend"

const Model: ModelAttributes = {
    SourceFriend: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    DestinationFriend: {
        type: DataTypes.UUIDV4,
        allowNull: false
    }
}

export {
    ModelName,
    Model
}