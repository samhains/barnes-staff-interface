import React from 'react';

const textStyle = {
  fontSize: '28px',
};

const Header = props => (
  <div style={textStyle}>
    {props.children}
  </div>
);

export default Header;
