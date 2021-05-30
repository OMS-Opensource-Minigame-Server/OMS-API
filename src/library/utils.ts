import { Router } from "express";

const log = (...args: Array<any>)=>{
    if(environmentVariable('environment', { silent: true }) == "development"){
        console.log(args.join(' '))
    }
}

const logRoutes = (routerKey: string, router: Router)=>{
     if(environmentVariable('environment',  { silent: true }) == "development"){
        let parsedRoutes = router.stack.map(r=> {
            return {
                "path": r.route.path,
                "methods": Object.keys(r.route.methods)
            }
        })
        console.log(`[OMS-API] Registering router ${routerKey} with routes:`)
        for(let route of parsedRoutes){
            for(let method of route.methods){
                console.log(`   ${method.toUpperCase()} ${route.path.toUpperCase()}`)
            }
        }
    }
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
    environmentVariable
}