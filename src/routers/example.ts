//An example router which is dynamically loaded by Express once registered in \routers\index.ts

import { Router } from "express";

const PathRouter = Router()
const Path = '/example'

PathRouter.get(Path, (request, response, next)=>{
    response
        .status(200)
        .end(`Well howdy partner, nice day we're havin.`)
})

PathRouter.post(Path, (request, response, next)=>{
    response
        .status(200)
        .end(`Who are you sendin' data to? Buzz off.`)
})

export {
    PathRouter
}