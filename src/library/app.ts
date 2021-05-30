import Express from "express"
import * as Routers from "../routers"
import * as Models from '../models'
import * as Utils from './utils'
import { Database } from './sequelize'

const Application = Express()
Application.use(Express.json())

for(const [RouterKey, Router] of Object.entries(Routers)){
    Utils.logRoutes(RouterKey, Router)
    Application.use(Router)
}

for(const Model of Object.values(Models)){
    Database.define(Model.ModelName, Model.Model)
    Database.sync()
}

export {
    Application
}
