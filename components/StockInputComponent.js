// StockInputComponent.js (stocks-frontend/src/components/StockInputComponent.js)

import React, { useState } from 'react';

const StockInputComponent = ({ subscribeStock }) => {
  const [selectedStock, setSelectedStock] = useState('');
  const availableStocks = ['Stock 1', 'Stock 2', 'Stock 3', /* Add more stocks */];

  const handleSelectChange = (e) => {
    setSelectedStock(e.target.value);
  };

  const handleSubscribe = () => {
    if (selectedStock) {
      subscribeStock(selectedStock);
      setSelectedStock('');
    } else {
      // Handle error or validation for empty selection
    }
  };

  return (
    <div>
      <h2>Subscribe to Stocks</h2>
      <select value={selectedStock} onChange={handleSelectChange}>
        <option value="">Select a stock</option>
        {availableStocks.map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default StockInputComponent;
