import React from 'react';
import HouseItem from './house_item'

const HouseList = (props) => {
	return (
      <div className="flex mt-10 mb-6 flex-wrap justify-around">
        {props.houses.map((house) => <HouseItem house={house}/>)}
      </div>
		)
}

export default HouseList
