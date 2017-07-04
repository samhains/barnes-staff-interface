import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Wrapper from './Wrapper';
import Header from './Header';
import HeaderSmall from './HeaderSmall';
import SubHeader from './SubHeader';
import SearchInput from './SearchInput';
import ServiceSelect from './ServiceSelect';
import Loader from './Loader';

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
        loading: true,
        artwork: null,
        tagData: null 
      }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch('http://localhost:1337/artwork/'+id)
      .then(response => response.json())
      .then(response => {
        this.setState(
          { artwork: response,
            loading: false,
            tagData: response.tags
          })
      })
      .catch(err => console.error(err.message))
  }

  render() {
    if (this.state.loading) {
      return (
        <Wrapper>
          <Loader />
        </Wrapper>
      )
    }


    return (
      <Wrapper>
        <div> Please search for the name of a Painting </div>
        <SearchInput />
        {this.state.artwork ?
          <div>
            <Header> {this.state.artwork.name} by {this.state.artwork.artist.name} </Header>
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
                        <TableRowColumn>{tag.name}</TableRowColumn>
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
