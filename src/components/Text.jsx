import React from 'react';

function Text({scale, value, color}) {
  return (
    <>
      <span className={`fs-${scale}`} style={{
        color: `${color}`
      }}>{value}</span>
    </>
  );
}

export default Text;
