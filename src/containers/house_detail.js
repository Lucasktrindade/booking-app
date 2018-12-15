import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchDetailHouse } from '../actions'

class HouseDetail extends Component {
  componentWillMount() {
    this.props.fetchDetailHouse()
  }
  render() {
    return (
      <div className="container mx-md mx-auto">
        <h1 className="text-center mt-6 mb-6">HouserGuest</h1>
        <div className="block mx-md mx-auto mb-4">
          <Link className="block text-center text-black hover:text-blue-darker" to={'/'}>Voltar</Link>
        </div>
        <div className="flex items-center">
          <div>
            <img src={this.props.house.bigImage} alt="600x400" />
          </div>
          <div className="leading-loose mr-4 p-10">
            <p className="font-mono"><span className="font-bold text-grey-darker">Avaliação:</span> {this.props.house.rate}</p>
            <p className="font-mono"><span className="font-bold text-grey-darker">Localização:</span> {this.props.house.location}</p>
            <p className="font-mono"><span className="font-bold text-grey-darker">Diária:</span>{this.props.house.price} dol</p>
            <div>
              <label className="block text-grey-darker text-sm font-bold mb-2" for="entrada">
                Entrada:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="entrada" type="date" placeholder="Entrada" />
              <label className="block text-grey-darker text-sm font-bold mb-2" for="saida">
                Saída:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="saida" type="date" placeholder="Saída" />
            </div>
            <button type="button" className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full w-full block mt-8">Reservar</button>
          </div>
        </div>
        <div className="pt-4">
          <h2>{this.props.house.name}</h2>
          <p>{this.props.house.description}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({house}) {
  return { house }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchDetailHouse}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HouseDetail);
