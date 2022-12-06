import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 2) {
      document.title = `New Title (${value})`;
    }
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue((prevValue) => prevValue + 1)}>
        Increse the value
      </button>
    </>
  );
};

export default UseEffectBasics;
