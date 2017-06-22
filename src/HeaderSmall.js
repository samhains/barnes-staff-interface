import React from 'react';

const textStyle = {
  fontSize: '24px',
  fontWeight: '800'
};

const HeaderSmall = props => (
  <div style={textStyle}>
    {props.children}
  </div>
);

export default HeaderSmall;
