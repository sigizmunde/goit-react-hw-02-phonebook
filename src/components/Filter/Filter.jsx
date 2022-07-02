import React from 'react';
import { Label } from './Filter.styled';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  state = {
    filter: '',
  };

  onFilterChange = e => {
    this.props.onChange({ filter: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <Label>
        Find contacts by name
        <input onChange={this.onFilterChange} />
      </Label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
