import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HouseItem from '../components/house_item';

class HouseList extends Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
	      <div className="flex mt-10 mb-6 flex-wrap justify-around">
	        {this.props.houses.map((house, index) =>  <Link className="no-underline text-black hover:text-blue-darker" to={`house/${index+1}`}><HouseItem house={house} key={index}/></Link>)}
	      </div>
			)
	}
}

function mapStateToProps({houses}) {
	return { houses }
}

export default connect(mapStateToProps)(HouseList)
