import React, { useState } from 'react';
import BalanceSheet from './BalanceSheet';
import Transaction from './Transaction';
import TransactionReport from './TransactionReport';

// Define the main Bank Dashboard component
const BankDashboard: React.FC = () => {
  const [balance, setBalance] = useState<number>(1000); // Starting balance
  const [transactions, setTransactions] = useState<{ amount: number; type: 'Credit' | 'Debit' }[]>([]);

  // Handle a transaction (credit or debit)
  const handleTransaction = (amount: number, type: 'Credit' | 'Debit') => {
    if (type === 'Debit' && amount > balance) {
      alert("Insufficient balance for the transaction!");
      return;
    }

    const newBalance = type === 'Credit' ? balance + amount : balance - amount;
    setBalance(newBalance);

    // Add the transaction to the report
    setTransactions([...transactions, { amount, type }]);
  };

  return (
    <div className="dashboard">
      <h1>Bank Balance Sheet</h1>
      <h3>Account number: 2167358127263</h3>
      <h3>Account Name: Visweshvar</h3>

      <div className="dashboard-content">
        {/* Display the current balance */}
        <BalanceSheet Amount={balance} />

        {/* Transaction input (credit or debit) */}
        <Transaction onTransaction={handleTransaction} />

        {/* Report of all transactions */}
        <TransactionReport transactions={transactions} />
      </div>
    </div>
  );
};

export default BankDashboard;
