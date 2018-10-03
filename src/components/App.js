//Application ID: cc90edfa
//Application Key: 3ccb0e8ad4f72be21ef79e0df985a0e
//Example: https://api.edamam.com/search?q=chicken&app_id=cc90edfa&app_key=3ccb0e8ad4f72be21ef79e0df985a0e


import React from 'react';
import IngredientAdd from './IngredientAdd.js'
import Fridge from "./Fridge.js"
import SearchRecipes from "./SearchRecipes.js"

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      stock: [],

      activeIngredients: [],

      searchResults: []
    }

    this.retrieveIngredients = this.retrieveIngredients.bind(this)
    this.removeIngredients = this.removeIngredients.bind(this)
    this.fetchRecipes = this.fetchRecipes.bind(this)
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

  removeIngredients(ingredient, property){
    this.setState({
      [property]: this.state[property].filter(item => item != ingredient)
    })
  }

  fetchRecipes(){
    const searchString = this.state.activeIngredients.map(item => item.ingredient)
                                                     .join(",")
    fetch(`https://api.edamam.com/search?q=${searchString}&app_id=cc90edfa&app_key=6e8835559144d18e1285510b948a2945`)
      .then(response => response.json())
      .then(body => {
        console.log(body)
        this.setState({
          searchResults: body.hits

        })
      })
  }

  render(){
    return (
      <div className="app">
        <IngredientAdd retrieveIngredients={this.retrieveIngredients} />
        <Fridge stock={this.state.stock}
                activeIngredients={this.state.activeIngredients}
                retrieveIngredients={this.retrieveIngredients}
                removeIngredients={this.removeIngredients}
                fetchRecipes={this.fetchRecipes}
              />
        <SearchRecipes searchResults={this.state.searchResults}/>

      </div>
    )
  }
}

export default App;
