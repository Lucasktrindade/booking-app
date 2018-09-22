import React from 'react';

const HouseItem = (props) => {
	return (
			<div className="flex shadow cursor-pointer border border-grey-light mb-6">
				<img src={props.house.thumbnail} alt="Placeholder Image"/>
				<div className="ml-2 self-center p-4">
					<h4 className="mt-2 mb-2">{props.house.name}</h4>
					<h5 className="mt-2 mb-2">{props.house.address}</h5>
					<h6 className="mt-2 mb-2">{props.house.rate}</h6>
				</div>
			</div>
		)
}

export default HouseItem
