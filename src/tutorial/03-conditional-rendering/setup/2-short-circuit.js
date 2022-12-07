import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Toggle Error Display');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setIsError(!isError)}>
        {text}
      </button>
      {isError ? <h3>There is an error</h3> : <h3>There is no error</h3>}
    </>
  );
};

export default ShortCircuit;
