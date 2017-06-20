import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style = {
  height: 200,
  width: 400,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle = {
  display: 'flex',
  marginTop: '10%',
  justifyContent: 'center',
};

const buttonStyle = {
  marginTop: '20px',
  marginLeft: '10px',
};

const Home = () => (
  <div style={containerStyle}>

    <Paper
      style={style}
    >
      <TextField
        floatingLabelText="Password"
        type="password"
      />
      <Link to="/about">
        <RaisedButton
          style={buttonStyle}
          label="Submit"
          primary
        />
      </Link>
    </Paper>
  </div>
);

export default Home;
