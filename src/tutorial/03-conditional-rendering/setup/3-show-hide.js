import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <>
      <h2>Window size:</h2>
      <h3>{windowWidth} px</h3>
    </>
  );
};

export default ShowHide;
