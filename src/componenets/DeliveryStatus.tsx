import React, { useState } from 'react';

// Define props for DeliveryStatus
interface DeliveryStatusProps {
  isTruckLeft: boolean;
  NumTruckLeft: number;
  warehouseItems: number;
  onTruckDeparture: (dispatchAmount: number) => void; 
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ isTruckLeft, NumTruckLeft, warehouseItems, onTruckDeparture }) => {
  const [dispatchAmount, setDispatchAmount] = useState<number>(500); 

  // Handler for dispatch button click
  const handleDispatchClick = () => {
    onTruckDeparture(dispatchAmount); // Pass the user's input to the parent component
  };
  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      <p>{isTruckLeft ? `${NumTruckLeft} truck has left the warehouse.` : `The ${NumTruckLeft} truck is still in the warehouse.`}</p>

      {/* Input field to take the dispatch amount */}
      {warehouseItems > 0 && (
        <>
          <input
            type="number"
            value={dispatchAmount}
            onChange={(e) => setDispatchAmount(parseInt(e.target.value) || 0)}
            min="1"
            max={warehouseItems} // Optional: Cap the maximum input to the available stock
          /> <br />
          <button onClick={handleDispatchClick}>Dispatch Truck</button>
        </>
      )}

      {warehouseItems === 0 && <p>No items left in the warehouse.</p>}
    </div>
  );
};

export default DeliveryStatus;
