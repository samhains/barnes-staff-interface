import React from 'react';

const containerStyle = {
  fontSize: '28px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  marginTop: '200px'
};


const Loader = () => (
  <div style={containerStyle}>
    <span>
      Loading...
    </span>
  </div>
);

export default Loader;
