import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const SearchInput = () => (
  <SelectField
    floatingLabelText="Service"
  >
    <MenuItem value={1} primaryText="IBM Watson" />
    <MenuItem value={2} primaryText="Tensorflow" />
    <MenuItem value={3} primaryText="AWS Rekognition" />
    <MenuItem value={4} primaryText="Google" />
    <MenuItem value={5} primaryText="Microsoft Azure" />
    <MenuItem value={6} primaryText="Clarifai" />
  </SelectField>
);

export default SearchInput;
