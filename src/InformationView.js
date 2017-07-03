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

const innerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '0',
};

const tagData = [
  { name: 'Dog', confidence: 0.984 },
  { name: 'Cat', confidence: 0.984 },
  { name: 'Mouse', confidence: 0.984 },
  { name: 'Badger', confidence: 0.984 },
];

class InformationView extends Component {
  constructor(props) {
    super(props);
    this.state = { serviceName: 'Microsoft Azure' };
    this.loading = true;
  }

  render() {
    if (true) {
      
      return (
        <Wrapper>
          <Loader/>
        </Wrapper>
      )
      
    }

    return (
      <Wrapper>
        <SearchInput />
        <Header> The Crying Woman by Pablo Picasso </Header>
        <SubHeader> Information about this painting might sit here</SubHeader>
        <div style={containerStyle}>
          <div style={innerContainerStyle}>
            <div>
              <img src="./cezanne.jpg" alt="" />
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
                { tagData.map(tag => (
                  <TableRow key={tag.name}>
                    <TableRowColumn>{tag.name}</TableRowColumn>
                    <TableRowColumn>{tag.confidence}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default InformationView;
