import React, { useState } from 'react';
import '../App.css';
import BalanceSheet from './BalanceSheet';
import Transaction from './Transaction';
import TransactionReport from './TransactionReport';

const BankDashboard: React.FC = () => {
  const [balance, setBalance] = useState<number>(25000); // Starting balance
  const [isTransactionDone, setIsTransactionDone] = useState<boolean>(false);
  const [numTransactions, setNumTransactions] = useState<number>(0);
  const [transactions, setTransactions] = useState<{ amount: number; type: 'Credit' | 'Debit' }[]>([]);

  const handleTransaction = (transactionAmount: number, transactionType: 'Credit' | 'Debit') => {
    if (transactionType === 'Debit' && transactionAmount > balance) {
      alert("Insufficient balance for this debit transaction!");
      return;
    }

    // Calculate the new balance after the transaction
    const newBalance = transactionType === 'Credit' ? balance + transactionAmount : balance - transactionAmount;
    setBalance(newBalance);

    // Update transaction report
    setTransactions([...transactions, { amount: transactionAmount, type: transactionType }]);

    // Track transaction count and flag
    setNumTransactions(numTransactions + 1);
    setIsTransactionDone(true);
  };

  return (
    <div className="dashboard">
      <h1>Bank Balance Sheet</h1>
      <h3>Account number: 2167358127263</h3>
      <h3>Account Name: Visweshvar</h3>

      <div className="dashboard-content">
        {/* Balance Sheet showing current bank balance */}
        <BalanceSheet Amount={balance} />

        {/* Transaction section */}
        <Transaction onTransaction={handleTransaction} />

        {/* Transaction report showing all past transactions */}
        <TransactionReport transactions={transactions} />
      </div>
    </div>
  );
};

export default BankDashboard;
