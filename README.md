# PriceFractalsAnalyzer
Identify price fractals using Depth-First Search with Fibonacci Numbers.

## Install
```
npm install ccxt
npm install pricefractalsanalyzer
```

## Example
```js
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
 * Find maximum subarray
 */
const analyzer = new PriceFractalsAnalyzer(historicalData)
const prediction = analyzer.analyzeFractals()
console.log({ prediction: prediction.slice(-10) }) // Print last 10 predictions
```

## Results
```
{
  prediction: [
    {
      price: 66074.04,
      timestamp: 1709683200000,
      direction: 'bullish',
      fiblevel: null
    },
    {
      price: 71452.01,
      timestamp: 1710201600000,
      direction: 'bearish',
      fiblevel: null
    },
    {
      price: 73072.41,
      timestamp: 1710288000000,
      direction: 'bullish',
      fiblevel: null
    },
    {
      price: 71388.94,
      timestamp: 1710374400000,
      direction: 'bearish',
      fiblevel: null
    },
    {
      price: 68393.48,
      timestamp: 1710633600000,
      direction: 'bullish',
      fiblevel: null
    },
    {
      price: 67609.99,
      timestamp: 1710720000000,
      direction: 'bearish',
      fiblevel: null
    },
    {
      price: 67840.51,
      timestamp: 1710892800000,
      direction: 'bullish',
      fiblevel: null
    },
    {
      price: 65501.27,
      timestamp: 1710979200000,
      direction: 'bearish',
      fiblevel: null
    },
    {
      price: 63990.01,
      timestamp: 1711152000000,
      direction: 'bullish',
      fiblevel: null
    },
    {
      price: 68755.76,
      timestamp: 1711497600000,
      direction: 'bearish',
      fiblevel: null
    }
  ]
}
```

## License
MIT