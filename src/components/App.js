//Application ID: cc90edfa
//Application Key: 3ccb0e8ad4f72be21ef79e0df985a0e
//Example: https://api.edamam.com/search?q=chicken&app_id=cc90edfa&app_key=3ccb0e8ad4f72be21ef79e0df985a0e


import React from 'react';
import IngredientAdd from './IngredientAdd.js'
import Fridge from "./Fridge.js"

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      stock: [],

      activeIngredients: []
    }

    this.retrieveIngredients = this.retrieveIngredients.bind(this)
  }

// componentDidMount(){
//   fetch('https://api.edamam.com/search?q=chicken,garlic,corn&app_id=cc90edfa&app_key=6e8835559144d18e1285510b948a2945')
//   .then(response => response.json())
//   .then(b

componentDidMount(){
  const currentStock = window.localStorage.getItem('stock');
  const stockArray = currentStock ? JSON.parse(currentStock) : [];
  this.setState({
    stock: stockArray
  });
}




  retrieveIngredients(ingredient, property){
    this.setState({
      [property]: this.state[property].concat(ingredient)
    }, () => window.localStorage.setItem(property, JSON.stringify(this.state.stock)));

  }

  render(){
    return (
      <div className="app">
        <IngredientAdd retrieveIngredients={this.retrieveIngredients} />
        <Fridge stock={this.state.stock} />
        App goes here
      </div>
    )
  }
}

export default App;
