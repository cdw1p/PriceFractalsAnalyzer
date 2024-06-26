import ccxt from 'ccxt'
import PriceFractalsAnalyzer from 'pricefractalsanalyzer'

/**
 * Fetch historical data
 */
const exchange = new ccxt.binance()
const symbol = 'BTC/USDT'
const timeframe = '1d'
const limit = 1000
const historicalData = await exchange.fetchOHLCV(symbol, timeframe, undefined, limit)

/**
 * Find fractals and predict the next price
 */
const analyzer = new PriceFractalsAnalyzer(historicalData)
const prediction = analyzer.analyzeFractals()
console.log({ prediction: prediction.slice(-10) }) // Print last 10 predictions