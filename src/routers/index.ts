import { PathRouter as ExampleRouter } from './example'
import { PathRouter as PlayerRouter } from './playerRouter'
import { PathRouter as PartyRouter } from './partyRouter'
import { PathRouter as FriendRouter } from './friendRouter'
import { PathRouter as FriendRequestRouter } from './friendRequestRouter'
import { PathRouter as RankRouter } from './rankRouter'
import { PathRouter as CurrencyRouter } from './currencyRouter'
import { PathRouter as CurrencyNameRouter } from './currencyNameRouter'
import { PathRouter as CurrencyConversionRatioRouter } from './currencyConversionRatioRouter'
import { PathRouter as CurrencyHeldRouter } from './currencyHeldRouter'


// All routers must be registered here to be loaded by the Express application.
// Routers should be exported as PathRouter, but can be renamed by using as TestRouter when importing into this file.
// This as name is used when logging, so is kind of useful to keep track of.

export {
    //ExampleRouter,
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