import React from 'react';
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
]

const Main = () => (
  <Wrapper>
    <Header> The Crying Woman by Pablo Picasso </Header>
    <SubHeader> Information about this painting might sit here</SubHeader>
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <SearchInput />
        <div>
          <img src="./cezanne.jpg" alt="" />
        </div>
      </div>
      <div>
        <HeaderSmall>
          Microsoft Azure
        </HeaderSmall>
        <ServiceSelect />
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Confidence</TableHeaderColumn>
            </TableRow>
          </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {tagData.map((tag) => (
              <TableRow>
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

export default Main;
