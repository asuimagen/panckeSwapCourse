const ethers = require("ethers")
//const axios = require("axios")

const { addressFactory, addressRouter, addressFrom, addressTo } = require("./adressList")
const { erc20ABI, pairABI, factoryABI, routerABI } = require("./ABIList")
const apiKey ="4KR1X21KKUHHT8ITTCGY7P6XZXVNJCJ6JF" // apiKey de polygon 

// el proveedor estandar
const provider = new ethers.providers.JsonRpcProvider(`https://api-zkevm.polygonscan.com/api`)
//const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed2.binance.org/")

// Conectando con la Factory
const contractFactory = new ethers.Contract(
  addressFactory,
  factoryABI,
  provider
  )
  
// conectando con el router donde esta los amount
const contarctRouter = new ethers.Contract(addressRouter, routerABI, provider)

 // llamas a la blockchain
const amountInHuman = "500"

const getPrices = async (amountInHuman) => {
  //Contract amount in 
  const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider)
  const decimals = await contractToken.decimals()
  const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString()

  // Get amounts out
  const amountsOut = await contarctRouter.getAmountsOut(amountIn, [
    addressFrom,
    addressTo
  ])

  // Convertir el amount out en decimales
  const contractToken2 = new ethers.Contract(addressTo, erc20ABI, provider)
  const decimals2 = await contractToken2.decimals()

  // Convertir el amount out en formato legible 
  const amountHumanOut = ethers.utils.formatUnits(
    amountsOut[1].toString(),
    decimals2
  )

  console.log(amountHumanOut, amountIn)
}

getPrices(amountInHuman)

