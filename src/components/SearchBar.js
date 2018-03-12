import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { StyleSheet, TextInput } from 'react-native';

export default class SearchBar extends Component {
  static propTypes = {
    searchDeals: PropTypes.func.isRequired
  }
  state = {
    searchTerm: ''
  }
  debounceSearchDeals = debounce(this.props.searchDeals, 300);
  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.debounceSearchDeals(this.state.searchTerm);
    });
  }
  render() {
    return (
      <TextInput
        placeholder="Search all deals"
        style={styles.input}
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12
  }
});