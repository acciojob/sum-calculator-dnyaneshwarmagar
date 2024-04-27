import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate the sum whenever the array of numbers changes
    const calculateSum = async () => {
      let total = 0;
      for (let number of numbers) {
        total += number;
      }
      setSum(total);
    };
    calculateSum();
  }, [numbers]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    // Check if the input is a valid number
    if (!isNaN(value)) {
      // Update the array of numbers with the new input
      setNumbers([...numbers, value]);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleInputChange} />
      <div>Total Sum: {sum}</div>
    </div>
  );
};

export default SumCalculator;
