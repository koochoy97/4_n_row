import { useState, useEffect } from "react";

export function Test() {
  const [array, setArray] = useState([]);

  function handleClick(color) {
    setArray([...array, color]);
    console.log(array);
    if (array.includes(color)) {
      console.log("Está");
    }
  }
  return (
    <>
      <h1>{JSON.stringify(array)}</h1>
      <div className="flex mt-3">
        <button
          className="bg-green-500 p-2 rounded-md w-32 "
          onClick={() => {
            handleClick("Green");
          }}
        >
          Green
        </button>
        <button
          className="bg-red-500 p-2 rounded-md w-32"
          onClick={() => {
            handleClick("Red");
          }}
        >
          Red
        </button>
        <button
          className="bg-blue-500 p-2 rounded-md w-32"
          onClick={() => {
            handleClick("Blue");
          }}
        >
          Blue
        </button>
      </div>
    </>
  );
}
