import React from 'react';

interface Transaction {
  amount: number;
  type: 'Credit' | 'Debit';
}

interface TransactionReportProps {
  transactions: Transaction[];
}

const TransactionReport: React.FC<TransactionReportProps> = ({ transactions }) => {
  return (
    <div className="transaction-report">
      <h2>Transaction Report</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type}: ${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionReport;
