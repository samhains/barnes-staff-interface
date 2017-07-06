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
import SubHeader from './SubHeader';

import SearchInput, {createFilter} from 'react-search-input'

import ServiceSelect from './ServiceSelect';
import Loader from './Loader';
const KEYS_TO_FILTERS = ['name']

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const imageStyle = {
  maxWidth: '400px',

}

const innerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '0',
};


class InformationView extends Component {
  constructor(props) {
    super(props);
    this.state =
      { serviceName: 'Microsoft Azure',
        searchTerm: '',
        artworks: [],
        loading: true,
        artwork: null,
        tagData: null,
      }
  }
  refreshPage(){ 
      window.location.reload(); 
  }
  componentDidMount() {
    console.log("here")
    const id = this.props.match.params.id;
    if (id) {
      fetch(`http://localhost:1337/artwork/${id}`)
        .then(response => response.json())
        .then(response => {
          this.setState(
            { artwork: response,
              loading: false,
              tagData: response.tags
            })
        })
        .catch(err => {
          this.setState( { loading: false });
        })

    } else {
        console.log('here')
        this.setState( { loading: false });
    }
  }

  searchUpdated (term) {
    console.log('updating', term)
    var self = this;

    fetch(`http://localhost:1337/artwork/search/${term}`)
      .then(response => response.json())
      .then(function(artworks){
        self.setState({searchTerm: term, artworks: artworks})
      })
      .catch(function(err){
        console.error('while searching artwork error:', err)
      })
  }

  render() {
    console.log(this.state.artworks)
    const filteredArtworks = this.state.artworks.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).slice(0, 10);

    if (this.state.loading) {
      return (
        <Wrapper>
          <Loader />
        </Wrapper>
      )
    }

    console.log(this.state.artwork)

    return (
      <Wrapper>
        <div> Please search for the name of a Painting </div>
        <SearchInput onChange={this.searchUpdated.bind(this)} fuzzy sortResults/>

        {filteredArtworks.map(artwork => {
            return (
              <div className="mail" key={artwork.id}>
                <Link to={`/artwork/${artwork.id}`} onClick={ this.refreshPage }>
                  <div className="from">{artwork.name}</div>
                </Link>
              </div>
            )
          })}
        {this.state.artwork ?
          <div>
            <Header> {this.state.artwork.name} by <Link to={`/artist/${this.state.artwork.artist.id}`}>{this.state.artwork.artist.name}</Link> </Header>
            <SubHeader> {this.state.artwork.year}</SubHeader>
            <div style={containerStyle}>
              <div style={innerContainerStyle}>
                <div>
                  <img style={imageStyle} src={`http://localhost:1337/images/${this.state.artwork.url}`} alt="" />
                </div>
              </div>
              <div>
                <HeaderSmall>
                  { this.state.serviceName }
                </HeaderSmall>
                <ServiceSelect onClick={val => this.setState({ serviceName: val })} />
                <Table>
                  <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>Name</TableHeaderColumn>
                      <TableHeaderColumn>Confidence</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    { this.state.tagData.map((tag, index) => (
                      <TableRow key={`${tag.name}_${index}`}>
                        <TableRowColumn><Link to={`/tag/${tag.name}`}>{tag.name}</Link></TableRowColumn>
                        <TableRowColumn>{tag.confidence}</TableRowColumn>
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
