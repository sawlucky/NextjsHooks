"use client";
import React, { useState } from "react";
import List from "../cpmonents/List";
const page = () => {
  const [number, setNumber] = useState(0);
  const getNumber = () => {
    return [number, number + 1, number + 2];
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <List getNum={getNumber} />
    </div>
  );
};

export default page;
