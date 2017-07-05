import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Header from './Header';
import HeaderSmall from './HeaderSmall';
import SubHeader from './SubHeader';

import SearchInput, {createFilter} from 'react-search-input'

import ServiceSelect from './ServiceSelect';
import Loader from './Loader';
const KEYS_TO_FILTERS = ['name']

const imageContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'

}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const containerStyle = {
  width: '800px'
};

const imageStyle = {
  maxWidth: '200px',

} 

const innerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '0',
};


class TagView extends Component {
  constructor(props) {
    super(props);
    this.state =
      { 
        searchTerm: '',
        tags: [],
        loading: true,
        artwork: null,
        tagData: null,
      }
  }
  refreshPage(){ 
      window.location.reload(); 
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id)
    fetch(`http://localhost:1337/artwork/query?tag=${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            tagName: id,
            artworks: response,
            loading: false
          })
      })
      .catch(err => console.error(err.message))
  }

  searchUpdated (term) {
    console.log('updating', term)
    var self = this;

    fetch(`http://localhost:1337/tag/search/${term}`)
      .then(response => response.json())
      .then(function(tags){
        self.setState({searchTerm: term, tags: tags})
      })
      .catch(function(err){
        console.error('while searching artwork error:', err)
      })
  }

  render() {
    console.log(this.state.artworks)
    const filteredTags = this.state.tags.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)).slice(0, 10);

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
        <div style={containerStyle}>
          <div> Please search for the name of a Tag </div>
          <SearchInput onChange={this.searchUpdated.bind(this)} fuzzy sortResults/>
          <Header> {capitalizeFirstLetter(this.state.tagName)} </Header>
          
          {filteredTags.map(tag => {
              return (
                <div className="mail" key={tag.id}>
                  <Link to={`${tag.name}`} onClick={ this.refreshPage }>
                    <div className="from">{tag.name}</div>
                  </Link>
                </div>
              )
            })}
            { this.state.artworks.length > 0 ?
                <div style={imageContainer}>
                  {this.state.artworks.map((artwork, index) => {
                  return (
                  <div key={`${artwork.id}_${index}`}> 
                    <Link to={`/artwork/${artwork.id}`}>
                      <img style={imageStyle} src={`http://localhost:1337/images/${artwork.url}`}/> 
                    </Link>
                  </div>)
                  })}
                </div>
                :
                <div> No images were found for this tag! </div>
          
            }
        </div>
      </Wrapper>
    );
  }
}

export default TagView;
