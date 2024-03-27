/**
 * Represents a class PriceFractalsAnalyzer
 */
class PriceFractalsAnalyzer {
  constructor(data) {
    this.data = data
  }

  /**
   * Analyzes the price fractals and returns an array of objects representing the detected fractals.
   * @returns {Array} An array of objects representing the detected fractals.
   */
  analyzeFractals() {
    const result = []
    for (let i = 2; i < this.data.length; i++) {
      const currentPrice = parseFloat(this.data[i][4])
      const previousPrice = parseFloat(this.data[i - 1][4])
      const priorPrice = parseFloat(this.data[i - 2][4])
      if (currentPrice > previousPrice && previousPrice < priorPrice) {
        result.push({
          price: currentPrice,
          timestamp: this.data[i][0],
          direction: 'bullish',
          fiblevel: this.getFibonacciLevel(currentPrice, previousPrice)
        })
      } else if (currentPrice < previousPrice && previousPrice > priorPrice) {
        result.push({
          price: currentPrice,
          timestamp: this.data[i][0],
          direction: 'bearish',
          fiblevel: this.getFibonacciLevel(currentPrice, previousPrice)
        })
      }
    }
    return result
  }

  /**
   * Calculates the Fibonacci level based on the difference between the current price and the previous price.
   * @param {number} currentPrice - The current price.
   * @param {number} previousPrice - The previous price.
   * @returns {number|null} The Fibonacci level if the difference is within the Fibonacci series, otherwise null.
   */
  getFibonacciLevel(currentPrice, previousPrice) {
    const diff = Math.abs(currentPrice - previousPrice)
    const fibonacci = this.fibonacciSeries(6.18) // 6.18 is the golden ratio
    for (let i = 0; i < fibonacci.length; i++) {
      if (diff <= fibonacci[i]) {
        return i
      }
    }
    return null
  }

  /**
   * Generates a Fibonacci series up to a given number.
   * @param {number} n - The number of Fibonacci numbers to generate.
   * @returns {number[]} - An array containing the Fibonacci series.
   */
  fibonacciSeries(n) {
    const result = [0, 1]
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2])
    }
    return result
  }
}

/**
 * Export PriceFractalsAnalyzer
 */
export default PriceFractalsAnalyzer