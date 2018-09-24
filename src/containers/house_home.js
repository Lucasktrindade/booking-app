import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchHouses } from '../actions'
import HouseSearch from '../components/house_search.js';
import HouseList from '../containers/house_list.js';

class HouseHome extends Component {
  componentWillMount () {
    this.props.fetchHouses()
  }
  render() {
    return (
      <div className="container mx-md mx-auto">
        <h1 className="text-center mt-6 mb-6">HouserGuest</h1>
        <HouseSearch/>
        <HouseList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchHouses}, dispatch)
}
export default connect(null, mapDispatchToProps)(HouseHome);
