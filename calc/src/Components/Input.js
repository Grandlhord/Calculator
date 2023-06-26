import React, { useState } from "react";

export default function Input({ setDisplayValue }) {
  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => prevValue + number);
  };

  const handleOperatorClick = (operator) => {
    setDisplayValue((prevValue) => prevValue + operator);
  };

  const handleDeleteClick = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleResetClick = () => {
    setDisplayValue("");
  };

  const handleEqualClick = () => {
    try {
      const evalResult = eval(displayValue); // Use eval with caution
      setDisplayValue(evalResult.toString());
    } catch (error) {
      // Handle any potential errors during evaluation
      setDisplayValue("Error");
    }
  };

  return (
    <section className="inputs">
      <div className="grid-container">
        <div className="item7" onClick={() => handleNumberClick("7")}>
          7
        </div>
        <div className="item8" onClick={() => handleNumberClick("8")}>
          8
        </div>
        <div className="item9" onClick={() => handleNumberClick("9")}>
          9
        </div>
        <div className="itemDel" onClick={handleDeleteClick}>
          DEL
        </div>
        <div className="item4" onClick={() => handleNumberClick("4")}>
          4
        </div>
        <div className="item5" onClick={() => handleNumberClick("5")}>
          5
        </div>
        <div className="item6" onClick={() => handleNumberClick("6")}>
          6
        </div>
        <div className="itemplus" onClick={() => handleOperatorClick("+")}>
          +
        </div>
        <div className="item1" onClick={() => handleNumberClick("1")}>
          1
        </div>
        <div className="item2" onClick={() => handleNumberClick("2")}>
          2
        </div>
        <div className="item3" onClick={() => handleNumberClick("3")}>
          3
        </div>
        <div className="itemminus" onClick={() => handleOperatorClick("-")}>
          -
        </div>
        <div className="itempoint" onClick={() => handleOperatorClick(".")}>
          .
        </div>
        <div className="item0" onClick={() => handleNumberClick("0")}>
          0
        </div>
        <div className="itemdiv" onClick={() => handleOperatorClick("/")}>
          /
        </div>
        <div className="itemx" onClick={() => handleOperatorClick("*")}>
          X
        </div>
      </div>

      <div className="resetequal">
        <div className="itemreset" onClick={handleResetClick}>
          RESET
        </div>
        <div className="itemequal" onClick={handleEqualClick}>
          =
        </div>
      </div>
    </section>
  )
}