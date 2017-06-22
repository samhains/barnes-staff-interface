import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const buttonStyle = {
  marginTop: '20px',
  marginLeft: '10px',
};

const SearchInput = () => (
  <div style={containerStyle}>
    <TextField
      floatingLabelText="Search here..."
    />
    <Link to="/about">
      <RaisedButton
        style={buttonStyle}
        label="Submit"
        primary
      />
    </Link>
  </div>
);

export default SearchInput;
