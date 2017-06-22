import React from 'react';
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
      </div>
    </div>
  </Wrapper>
);

export default Main;
