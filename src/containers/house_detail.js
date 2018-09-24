import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class HouseDetail extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="container mx-md mx-auto">
        <h1 className="text-center mt-6 mb-6">HouserGuest</h1>
        <h2>Detail Page {this.props.match.params.id}</h2>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
export default connect(null, mapDispatchToProps)(HouseDetail);
