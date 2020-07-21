import React from 'react';

 
const Viewport = ({children, mainClass}) => (
  <div className={mainClass}>
      <div className={"viewport-inner"}>
        {children}
      </div>
  </div>
);

export default Viewport;
