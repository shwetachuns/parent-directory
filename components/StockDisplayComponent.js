// StockDisplayComponent.js (stocks-frontend/src/components/StockDisplayComponent.js)

import React, { useState, useEffect } from 'react';

const StockDisplayComponent = ({ stockData }) => {
  const [displayedStocks, setDisplayedStocks] = useState([]);

  useEffect(() => {
    setDisplayedStocks(stockData);
  }, [stockData]);

  return (
    <div>
      <h2>Stock Updates</h2>
      <ul>
        {displayedStocks.map((stock) => (
          <li key={stock.id}>
            {stock.name} - {stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockDisplayComponent;
