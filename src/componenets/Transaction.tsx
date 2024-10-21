import React, { useState } from 'react';

interface TransactionProps {
  onTransaction: (amount: number, type: 'Credit' | 'Debit') => void;
}

const Transaction: React.FC<TransactionProps> = ({ onTransaction }) => {
  const [amount, setAmount] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<'Credit' | 'Debit'>('Credit');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(value > 0 ? value : 0); // Ensure positive number
  };

  const handleTransactionClick = () => {
    onTransaction(amount, transactionType);
  };

  return (
    <div className="transaction">
      <h2>Transaction</h2>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        min="0"
        placeholder="Enter Amount"
      />
      <br />
      <label>
        <input
          type="radio"
          name="transactionType"
          value="Credit"
          checked={transactionType === 'Credit'}
          onChange={() => setTransactionType('Credit')}
        />
        Credit
      </label>
      <label>
        <input
          type="radio"
          name="transactionType"
          value="Debit"
          checked={transactionType === 'Debit'}
          onChange={() => setTransactionType('Debit')}
        />
        Debit
      </label>
      <br />
      <button onClick={handleTransactionClick}>Submit Transaction</button>
    </div>
  );
};

export default Transaction;
