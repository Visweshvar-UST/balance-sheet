import React, { useState } from 'react';
import BalanceSheet from './BalanceSheet';
import Transaction from './Transaction';
import TransactionReport from './TransactionReport';

const BankDashboard: React.FC = () => {
  const [balance, setBalance] = useState<number>(25000); // Starting balance
  const [isTransactionDone, setIsTransactionDone] = useState<boolean>(false);
  const [numTransactions, setNumTransactions] = useState<number>(0);
  const [totc, settotc] = useState<number>(0);
  const [totd, settotd] = useState<number>(0);
  const [transactions, setTransactions] = useState<{ amount: number; type: 'Credit' | 'Debit' }[]>([]);

  const handleTransaction = (transactionAmount: number, transactionType: 'Credit' | 'Debit') => {
    if (transactionType === 'Debit' && transactionAmount > balance) {
      alert("Insufficient balance for this debit transaction!");
      return;
    }

    if(transactionType === 'Credit') {
      settotc(totc + transactionAmount);
    } 
    if(transactionType === 'Debit') {
      settotd(totd + transactionAmount);
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
    <div style={styles.container}>
      <h1 style={styles.heading}>Bank Balance Sheet</h1>
      <h3 style={styles.subHeading}>Account number: 2167358127263</h3>
      <h3 style={styles.subHeading}>Account Name: Visweshvar</h3>

      <div style={styles.content}>
        {/* Balance Sheet showing current bank balance */}
        <BalanceSheet Amount={balance} />

        <span style={styles.tot}>Total Credit:  {totc}</span>
        <span style={styles.tot}>Total Debit: {totd}</span>
        {/* Transaction section */}
        <Transaction onTransaction={handleTransaction} />
        <br />

        {/* Transaction report showing all past transactions */}
        <TransactionReport transactions={transactions} />
        <br />
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center' as const,
    fontSize: '2rem',
    color: '#333',
    marginBottom: '10px',
  },
  subHeading: {
    textAlign: 'center' as const,
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '5px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    alignItems: 'center' as const,
  },
  tot: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '5px',
    display: 'inline',
  }
};

export default BankDashboard;
