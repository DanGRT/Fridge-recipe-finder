//Application ID: cc90edfa
//Application Key: 3ccb0e8ad4f72be21ef79e0df985a0e
//Example: https://api.edamam.com/search?q=chicken&app_id=cc90edfa&app_key=3ccb0e8ad4f72be21ef79e0df985a0e


import React from 'react';
import Header from './Header.js'
import IngredientAdd from './IngredientAdd.js'
import Fridge from "./Fridge.js"
import SearchRecipes from "./SearchRecipes.js"

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();

    this.state = {

      display: 'fridge', // 'fridge' or 'recipes'

      stock: [],

      activeIngredients: [],

      searchResults: []
    }

    this.retrieveIngredients = this.retrieveIngredients.bind(this)
    this.removeIngredients = this.removeIngredients.bind(this)
    this.fetchRecipes = this.fetchRecipes.bind(this)
    this.changeDisplay = this.changeDisplay.bind(this)
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

  changeDisplay(displayType){
    this.setState({
      display: displayType
    })
  }




  retrieveIngredients(ingredient, property){
    const newList = this.state[property].concat(ingredient);
    this.setState({
      [property]: newList
    });
    if(property === 'stock'){
      window.localStorage.setItem(property, JSON.stringify(newList))
    }
  }

  removeIngredients(ingredient, property){
    this.setState({
      [property]: this.state[property].filter(item => item != ingredient)
    })
  }

  fetchRecipes(){
    const searchString = this.state.activeIngredients.map(item => item.ingredient)
                                                     .join(",")
    return fetch(`https://api.edamam.com/search?q=${searchString}&app_id=cc90edfa&app_key=6e8835559144d18e1285510b948a2945`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          searchResults: body.hits

        })
      })
  }

  render(){
    return (
      <div className="app">
        <Header />
        {this.state.display === 'fridge'
        ?(<React.Fragment>
          <IngredientAdd retrieveIngredients={this.retrieveIngredients} />
           <Fridge stock={this.state.stock}
                   activeIngredients={this.state.activeIngredients}
                   retrieveIngredients={this.retrieveIngredients}
                   removeIngredients={this.removeIngredients}
                   fetchRecipes={this.fetchRecipes}
                   changeDisplay={this.changeDisplay} />
                 </React.Fragment> )
          : null }

        {this.state.display === 'recipes'
        ? <SearchRecipes stock={this.state.stock}
                       searchResults={this.state.searchResults}
                     />
        : null}

      </div>
    )
  }
}

export default App;
