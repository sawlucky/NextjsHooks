"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  function slowFunction(num) {
    for (let i = 0; i <= 100000000; i++) {
      return num * 2;
    }
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        Change theme
      </button>
      <br />
      <br />
      <br />
      <div style={theme}>{doubleNumber}</div>
      <button>
        <Link href={"/useref"}>next page</Link>
      </button>
    </div>
  );
};

export default Page;
