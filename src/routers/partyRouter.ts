//An example router which is dynamically loaded by Express once registered in \routers\index.ts

import { Router } from "express";

const PathRouter = Router()
const Path = '/party/:id?'

PathRouter.get(Path, async (request, response, next)=>{
    response
        .status(200)
        .end()
})

PathRouter.post(Path, (request, response, next)=>{
    response
        .status(200)
        .end()
})

PathRouter.patch(Path, (request, response, next)=>{
    response
        .status(200)
        .end()
})

PathRouter.delete(Path, (request, response, next)=>{
    response
        .status(200)
        .end()
})

export {
    PathRouter
}