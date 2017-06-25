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

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
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
  }
  render() {
    return (
      <Wrapper>
        <SearchInput />
        <div style={containerStyle}>
          <div>
            <Header> Pablo Picasso </Header>
            <SubHeader> Information about this painting might sit here</SubHeader>
          </div>
          <div>
            <HeaderSmall>
              { this.state.serviceName }
            </HeaderSmall>
            <ServiceSelect onClick={val => this.setState({ serviceName: val })} />
          </div>
        </div>
        <div style={containerStyle}>
          <div>
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
