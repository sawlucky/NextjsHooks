import React, { useEffect, useState } from "react";

const List = ({ getNum }) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    setValue(getNum());
    console.log(value);
  }, [getNum]);
  return (
    <div>
      {value.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default List;
