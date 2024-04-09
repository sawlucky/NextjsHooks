"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const page = () => {
  const [data, setData] = useState([]);

  const handleCLick = async () => {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(data.data);
    setData(data.data);
  };

  return (
    <>
      <div>
        <button onClick={handleCLick}>Click me</button>
        {
          <div>
            <h2>Data:</h2>
            <pre>{JSON.stringify(data)}</pre>
          </div>
        }
      </div>
    </>
  );
};

export default page;
