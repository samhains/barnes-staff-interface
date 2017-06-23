import React from 'react';
import PropTypes from 'prop-types'; // ES6
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const menuItems = [
  { name: 'IBM Watson' },
  { name: 'Tensorflow' },
  { name: 'AWS Rekognition' },
  { name: 'Google' },
  { name: 'Clarifai' },
];

const ServiceSelect = ({ onClick }) => (
  <SelectField
    onChange={(eevent, index, value) => onClick(value)}
    floatingLabelText="Service"
  >
    {menuItems.map(menuItem => (
      <MenuItem
        key={menuItem.name}
        value={menuItem.name}
        primaryText={menuItem.name}
      />
    ))}
  </SelectField>
);

ServiceSelect.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ServiceSelect;
