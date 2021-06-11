import { Router } from "express";

const log = (...args: any[])=>{
    if(environmentVariable('environment', { silent: true }) === "development"){
        // tslint:disable-next-line:no-console
        console.log(args.join(' '))
    }
}

const logRoutes = (routerKey: string, router: Router)=>{
     if(environmentVariable('environment',  { silent: true }) === "development"){
        const parsedRoutes = router.stack.map(r=> {
            return {
                "path": r.route.path,
                "methods": Object.keys(r.route.methods)
            }
        })
         // tslint:disable-next-line:no-console
        console.log(`[OMS-API] Registering router ${routerKey} with routes:`)
        for(const route of parsedRoutes){
            for(const method of route.methods){
                // tslint:disable-next-line:no-console
                console.log(`   ${method.toUpperCase()} ${route.path.toUpperCase()}`)
            }
        }
    }
}

const validateMinecraftUsername = (playerUsername: string)=>{
    const playerUsernameRegex: RegExp = /^\w+$/i
    const playerUsernameValid: boolean = playerUsernameRegex.test(playerUsername)
    return playerUsernameValid && playerUsername?.length >= 3 && playerUsername?.length <= 16;
}

const environmentVariable = (key: string, options = {silent: false}): string => {
    if(!key) throw new Error(`The first argument must be a string!`)

    const variable = process.env[key]
    if(!variable){
        if(options.silent){
            return ""
        }else{
            throw new Error(`The environment variable ${key} doesn't exist!`)
        }
    }else{
        return variable
    }
}

export {
    log,
    logRoutes,
    environmentVariable,
    validateMinecraftUsername
}