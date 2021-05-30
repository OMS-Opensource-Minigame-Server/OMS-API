import { Sequelize } from "sequelize";

//TODO: Replace with pg, currently testing in-memory with sqlite::memory. Remove dependency when removed!
const Database = new Sequelize("sqlite::memory:", {
    logging: false
})

export {
    Database
}