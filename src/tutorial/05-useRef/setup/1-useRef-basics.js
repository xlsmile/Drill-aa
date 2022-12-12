import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refInput = useRef(null);
  const refDiv = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refInput.current.value);
    console.log(refDiv.current);
  };

  useEffect(() => {
    refInput.current.focus();
  });

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refInput} />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <div ref={refDiv}>Div with Ref</div>
    </article>
  );
};

export default UseRefBasics;
