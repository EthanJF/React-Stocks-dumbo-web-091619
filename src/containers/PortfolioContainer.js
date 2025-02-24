import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const theseStocks = this.props.portfolioStocks.map((stock) => {
      return(
      <Stock stock={stock} sellStock={this.props.sellStock} key={stock.id}/>
      )
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           theseStocks
          }
      </div>
    );
  }

}

export default PortfolioContainer;
