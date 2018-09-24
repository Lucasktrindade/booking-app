import React, { Component } from 'react';
import { connect } from 'react-redux';
import HouseItem from '../components/house_item';

class HouseList extends Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
	      <div className="flex mt-10 mb-6 flex-wrap justify-around">
	        {this.props.houses.map((house, index) => <HouseItem house={house} key={index}/>)}
	      </div>
			)
	}
}

function mapStateToProps({houses}) {
	return { houses }
}

export default connect(mapStateToProps)(HouseList)
