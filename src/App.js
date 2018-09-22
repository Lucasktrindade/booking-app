import React, { Component } from 'react';
import HouseSearch from './components/house_search.js';
import HouseList from './components/house_list.js';
import './assets/App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      houses: [
        {thumbnail: 'https://via.placeholder.com/120x120', name: 'Título da Casa', address: 'Localização da Casa', rate: 'Melhor Lugar para Visitar'},
        {thumbnail: 'https://via.placeholder.com/120x120', name: 'Título da Casa', address: 'Localização da Casa', rate: 'Melhor Lugar para Visitar'},
        {thumbnail: 'https://via.placeholder.com/120x120', name: 'Título da Casa', address: 'Localização da Casa', rate: 'Melhor Lugar para Visitar'},
        {thumbnail: 'https://via.placeholder.com/120x120', name: 'Título da Casa', address: 'Localização da Casa', rate: 'Melhor Lugar para Visitar'},
        {thumbnail: 'https://via.placeholder.com/120x120', name: 'Título da Casa', address: 'Localização da Casa', rate: 'Melhor Lugar para Visitar'},
        {thumbnail: 'https://via.placeholder.com/120x120', name: 'Título da Casa', address: 'Localização da Casa', rate: 'Melhor Lugar para Visitar'}
      ]
    }
  }
  render() {
    return (
      <div className="container mx-md mx-auto">
        <h1 className="text-center mt-6 mb-6">HouserGuest</h1>
        <HouseSearch/>
        <HouseList houses={this.state.houses}/>
      </div>
    );
  }
}

export default App;
