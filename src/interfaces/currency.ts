export interface Currency {
    // UUID of the currency. Primary Key.
    UUID: string,
    // Name of the currency, which is an instance of CurrencyName.
    Name: CurrencyName
    // Prefix for currency, e.g. £, $, ¥
    Prefix?: string,
    // Postfix for currency, e.g. GBP, USD, YEN
    Postfix?: string
}

export interface CurrencyName {
    // UUID of the currency. Primary Key.
    UUID: string,
    // Singular e.g. Coin, Token, Money
    // You have been awarded 1 ${CurrencyName.Singular}
    Singular: string,
    // Plural e.g. Coins, Tokens, Monies
    // You have been awarded 100 ${CurrencyName.Plural}
    Plural: string
}

export interface CurrencyHeld {
    // Key is currency currency UUID
    // Value is amount of currency held.
    [key: string]: number
}

export interface CurrencyConversionMapping {
    // UUID Primary Key
    UUID: string,
    // Base Currency converting from
    BaseCurrency: Currency,
    // Final Currency converting to
    FinalCurrency: Currency,
    // Currency Conversion Ratio, e.g. 100 = 100 BaseCurrency = 1 FinalCurrency
    ConversionRatio: number
}