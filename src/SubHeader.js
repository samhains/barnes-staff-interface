import React from 'react';
import colors from './colors';

const textStyle = {
  fontSize: '20px',
  color: colors.grey,
};

const SubHeader = props => (
  <div style={textStyle}>
    {props.children}
  </div>
);

export default SubHeader;
