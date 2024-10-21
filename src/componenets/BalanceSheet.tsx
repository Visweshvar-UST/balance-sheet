import React from 'react';

// Define props with TypeScript
interface BalanceSheetAmount {
  Amount: number;
}

const BalanceSheet: React.FC<BalanceSheetAmount> = ({ Amount }) => {
  return (
    <div className="balance-sheet">
      <h2>Bank Balance</h2>
      <p>Current Balance: ${Amount.toFixed(2)}</p>
    </div>
  );
};

export default BalanceSheet;
