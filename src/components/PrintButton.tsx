import React from "react";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="print-btn" onClick={handlePrint}>
      Print
    </button>
  );
};

export default PrintButton;
