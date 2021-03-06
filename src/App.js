import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Login from './Login';
import ArtworkView from './ArtworkView';
import ArtistView from './ArtistView';
import ArtistTagView from './ArtistTagView';
import TagView from './TagView';

import './App.css';

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

const menuItems = [
{ name: 'Artworks', url: '/artwork' },
{ name: 'Artists', url: '/artist' },
{ name: 'Tags', url: '/tag' },
];

const drawerStyle = {
  marginTop: '64px',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 10px 10px',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => { this.setState({ open: !this.state.open }); }

  render() {
    return (
      <Router>
        <div>
          <AppBar
            title="Barnes Foundation"
            onLeftIconButtonTouchTap={this.handleToggle}
          >

            <Drawer
              containerStyle={drawerStyle}
              open={this.state.open}
            >
              {
                menuItems.map(
                  item => (
                    <Link key={item.name} style={linkStyle} to={item.url}>
                      <MenuItem>{item.name}</MenuItem>
                    </Link>),
                  )
              }
            </Drawer>
          </AppBar>
          <Route exact path="/" component={Login} />
          <Route exact path="/artwork" component={ArtworkView} />
          <Route exact path="/artwork/:id" component={ArtworkView} />
          <Route exact path="/artist" component={ArtistView} />
          <Route exact path="/artist/:id" component={ArtistView} />
          <Route exact path="/artist/:id/tag/:name" component={ArtistTagView} />
          <Route exact path="/tag/:id" component={TagView} />
          <Route exact path="/tag" component={TagView} />
        </div>
      </Router>
    );
  }
}

export default App;
