import React, { useEffect } from 'react';
import WOW from 'wowjs';

const WowWrapper = ({ children }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return <div>{children}</div>;
};

export default WowWrapper;
