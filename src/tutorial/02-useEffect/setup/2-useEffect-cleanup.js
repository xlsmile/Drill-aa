import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log('window resized');
    window.addEventListener('resize', checkWindowWidth);
    return () => {
      console.log('cleanup done');
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  console.log('render');

  return (
    <>
      <h2>Window Width:</h2>
      <h3>{width} PX</h3>
    </>
  );
};

export default UseEffectCleanup;
