import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Header from './Header';
import HeaderSmall from './HeaderSmall';
import _ from 'lodash';

import SearchInput, { createFilter } from 'react-search-input'

import ServiceSelect from './ServiceSelect';
import Loader from './Loader';

const KEYS_TO_FILTERS = ['name'];

const selectContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
};

const imageStyle = {
  maxWidth: '400px',

}

const innerContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '0',
  justifyContent: 'space-between'
};


class InformationView extends Component {
  constructor(props) {
    super(props);
    this.state =
      { serviceName: 'Microsoft Azure',
        searchTerm: '',
        artists: [],
        loading: true,
      }
  }
  refreshPage(){ 
      window.location.reload(); 
  }
  processTags(tagData){
    return _(tagData)
      .groupBy('name')
      .map((value, key) => ({name: key, count: value.length}))
      .sortBy('count')
      .reverse()
      .value();
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:1337/artist/${id}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        
        this.setState(
          { artist: response,
            artworks: response.artworks,
            loading: false,
            tagData: this.processTags(response.tags)
          })
      })
      .catch(err => console.error(err.message))
  }

  searchUpdated (term) {
    console.log('updating', term)
    var self = this;

    fetch(`http://localhost:1337/artist/search/${term}`)
      .then(response => response.json())
      .then(function(artists){
        console.log(artists)
        self.setState({searchTerm: term, artists: artists})
      })
      .catch(function(err){
        console.error('while searching artwork error:', err)
      })
  }

  render() {
    const filteredArtists = this.state.artists.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).slice(0, 10);

    if (this.state.loading) {
      return (
        <Wrapper>
          <Loader />
        </Wrapper>
      )
    }


    return (
      <Wrapper>
        <div> Please search for the name of an Artist </div>
        <SearchInput onChange={this.searchUpdated.bind(this)} fuzzy sortResults/>

        {filteredArtists.map(artist => {
            return (
              <div className="mail" key={artist.id}>
                <Link to={`${artist.id}`} onClick={ this.refreshPage }>
                  <div className="from">{artist.name}</div>
                </Link>
              </div>
            )
          })}

        {this.state.artist ?
          <div>
              <div style={innerContainerStyle}>
                <Header> {this.state.artist.name} </Header>
                <div style={selectContainerStyle}>
                  <HeaderSmall>
                    { this.state.serviceName }
                  </HeaderSmall>
                  <ServiceSelect onClick={val => this.setState({ serviceName: val })} />
                </div>
              </div>
              <div>
                <div>
                  <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                      <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Occurances</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      { this.state.tagData.map((tag, index) => (
                        <TableRow key={`${tag.name}_${index}`}>
                          <TableRowColumn><Link to={`/tag/${tag.name}`}>{tag.name}</Link></TableRowColumn>
                          <TableRowColumn>{tag.count}</TableRowColumn>
                        </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
          </div>
          : null
        }
      </Wrapper>
    );
  }
}

export default InformationView;
