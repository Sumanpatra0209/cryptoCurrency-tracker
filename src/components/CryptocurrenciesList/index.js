// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="listHeader">
      <p className="listCoinTypeHeading">Coin Type</p>
      <div className="usdEuroValuesContainer">
        <p className="listCoinValueHeading">USD</p>
        <p className="listCoinValueHeading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptoCurrencyListContainer">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptoCurrencyList">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptoCurrencyContainer">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptoCurrencyImage"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
