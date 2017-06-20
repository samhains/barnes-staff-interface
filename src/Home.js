import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  height: 200,
  width: 400,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle= {
  display: 'flex',
  marginTop: '10%',
  justifyContent: 'center'
}

const Home = () => (
  <div style={containerStyle}>

    <Paper
        style={style}>
      <TextField
        floatingLabelText="Password"
        type="password"
      />
    </Paper>
  </div>
);

export default Home;
