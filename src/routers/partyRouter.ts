import { Router } from "express";

const pathRouter = Router()
const path = '/party/:id?'

pathRouter.get(path, async (request, response, next)=>{
    response
        .status(200)
        .end()
})

pathRouter.post(path, (request, response, next)=>{
    response
        .status(200)
        .end()
})

pathRouter.patch(path, (request, response, next)=>{
    response
        .status(200)
        .end()
})

pathRouter.delete(path, (request, response, next)=>{
    response
        .status(200)
        .end()
})

export {
    pathRouter
}