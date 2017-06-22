import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const buttonStyle = {
  marginTop: '20px',
  marginLeft: '10px',
};

const outerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '0'
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const Main = () => (
  <div style={outerContainerStyle}>
    <div style={containerStyle}>
      <SelectField
        floatingLabelText="Service"
      >
        <MenuItem value={1} primaryText="IBM Watson" />
        <MenuItem value={2} primaryText="Tensorflow" />
        <MenuItem value={3} primaryText="AWS Rekognition" />
        <MenuItem value={4} primaryText="Google" />
        <MenuItem value={5} primaryText="Microsoft Azure" />
        <MenuItem value={6} primaryText="Clarifai" />
      </SelectField>
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
    <div>
      <img src="./cezanne.jpg" alt="" />
    </div>
  </div>
);

export default Main;
