// ambas address son polygon zkEVM osea de la red e polygon de pancakeSwap
const addressFactory = "0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E"
const addressRouter = "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb"
// las address de los tokens 
const addressFrom = "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035" //USDC polygon red
const addressTo = "0xa2036f0538221a77A3937F1379699f44945018d0" // MATIC polygon red

/* // Todo pero desde la BSC scan 
const addressFactory = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
const addressRouter = "0x10ED43C718714eb63d5aA57B78B54704E256024E"
// las address de los tokens 
const addressFrom = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" //BUSD Binance red
const addressTo = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" // WBNB Binance red */

module.exports = {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo
}