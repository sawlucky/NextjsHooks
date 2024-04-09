"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
const page = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1>shah lucky</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        My name is {name} and i used to be {prevName.current}
      </div>
      <button>
        <Link href={"/"}>home</Link>
      </button>
    </div>
  );
};

export default page;
