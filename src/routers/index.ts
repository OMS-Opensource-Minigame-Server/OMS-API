import { PathRouter as ExampleRouter } from './example'
import { pathRouter as PlayerRouter } from './playerRouter'
import { pathRouter as PartyRouter } from './partyRouter'
import { pathRouter as FriendRouter } from './friendRouter'
import { pathRouter as FriendRequestRouter } from './friendRequestRouter'
import { pathRouter as RankRouter } from './rankRouter'
import { pathRouter as CurrencyRouter } from './currencyRouter'
import { pathRouter as CurrencyNameRouter } from './currencyNameRouter'
import { pathRouter as CurrencyConversionRatioRouter } from './currencyConversionRatioRouter'
import { pathRouter as CurrencyHeldRouter } from './currencyHeldRouter'


// All routers must be registered here to be loaded by the Express application.
// Routers should be exported as PathRouter, but can be renamed by using as TestRouter when importing into this file.
// This as name is used when logging, so is kind of useful to keep track of.

export {
//    ExampleRouter,
    PlayerRouter,
    PartyRouter,
    FriendRouter,
    FriendRequestRouter,
    RankRouter,
    CurrencyRouter,
    CurrencyNameRouter,
    CurrencyConversionRatioRouter,
    CurrencyHeldRouter
}