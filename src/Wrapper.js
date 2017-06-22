import React from 'react';

const containerStyle = {
  maxWidth: '800px',
  margin: '0px auto',
};

const Wrapper = props => (
  <div style={containerStyle}>
    {props.children}
  </div>
);

export default Wrapper;
