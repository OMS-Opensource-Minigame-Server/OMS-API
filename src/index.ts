import { Application } from "./library/app"
import * as  Utils  from "./library/utils";

const applicationPort = process.env.API_PORT || 3000;

Application.listen(applicationPort, ()=>{
    Utils.log(`[OMS-API] Listening on port ${applicationPort}`)
})