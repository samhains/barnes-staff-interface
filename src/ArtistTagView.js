import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import Header from './Header';
import pluralize from 'pluralize';
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
        loading: true,
        artwork: null,
        tagData: null,
      }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const name = this.props.match.params.name;
    console.log(id)
    fetch(`http://localhost:1337/artwork/query?artist=${id}&tag=${name}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState(
          {
            tagName: name,
            artworks: response,
          })
      })
      .then(() => {
        fetch(`http://localhost:1337/artist/${id}`)
          .then(response => response.json())
          .then(response => {
            console.log('saving artist', response)
            this.setState(
              {
                artist: response,
                loading: false
              })

          })

      })
      .catch(err => {
        this.setState( { loading: false });
      })
  }


  render() {
    console.log(this.state.artworks)

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
          <Link to={`/artist/${this.state.artist.id}`}> {`<< ${this.state.artist.name}`} </Link>
          <Header> {this.state.artist.name}'s {pluralize(capitalizeFirstLetter(this.state.tagName))} </Header>
          
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
