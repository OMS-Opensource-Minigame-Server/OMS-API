import { Sequelize } from 'sequelize-typescript'
import Currency from "../models/currency";
import CurrencyHeld from "../models/currencyHeld";
import CurrencyName from "../models/currencyName";
import Friend from "../models/friend";
import Party from "../models/party";
import Player from "../models/player";
import Rank from "../models/rank";
import CurrencyConversionRatio from "../models/currencyConversionRatio";

// TODO: Replace with pg, currently testing in-memory with sqlite::memory. Remove dependency when removed!
const database = new Sequelize({
    database: 'some_db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    logging: false,
    storage: ':memory:',
    models: [__dirname + '/../models'],
})

export {
    database
}