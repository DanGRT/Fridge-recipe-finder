//Application ID: cc90edfa
//Application Key: 3ccb0e8ad4f72be21ef79e0df985a0e
//Example: https://api.edamam.com/search?q=chicken&app_id=cc90edfa&app_key=3ccb0e8ad4f72be21ef79e0df985a0e


import React from 'react';
import Header from './Header.js'
import IngredientAdd from './IngredientAdd.js'
import Fridge from "./Fridge.js"
import SearchRecipes from "./SearchRecipes.js"
import Loading from './Loading.js'

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();

    this.state = {

      display: 'fridge', // 'fridge' or 'recipes' or 'favourites'

      stock: [],

      activeIngredients: [],

      searchResults: [],

      loading: false,

      favourites: []

    }

    this.retrieveItem = this.retrieveItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.fetchRecipes = this.fetchRecipes.bind(this)
    this.changeDisplay = this.changeDisplay.bind(this)
  }



componentDidMount(){
  const currentStock = window.localStorage.getItem('stock');
  const stockArray = currentStock ? JSON.parse(currentStock) : [];
  const currentFaves = window.localStorage.getItem('favourites')
  const favesArray = currentFaves ? JSON.parse(currentFaves) : [];
  this.setState({
    stock: stockArray,
    favourites: favesArray
  });
}

  changeDisplay(displayType){
    this.setState({
      display: displayType
    })
  }



  retrieveItem(ingredient, property){
    const newList = this.state[property].concat(ingredient);

    this.setState({
      [property]: newList
    });
    if(property !== 'activeIngredients'){
      window.localStorage.setItem(property, JSON.stringify(newList))
    }
  }

  removeItem(ingredient, property){
    const newList = this.state[property].filter(item => item.key !== ingredient.key)
    this.setState({
      [property]: newList
    })
    if(property !== 'activeIngredients'){
      window.localStorage.setItem(property, JSON.stringify(newList))
    }

  }

  fetchRecipes(){
    const searchString = this.state.activeIngredients.map(item => item.ingredient)
                                                     .join(",")
    this.setState({
      loading: true
    })
    return fetch(`https://api.edamam.com/search?q=${searchString}&app_id=2d8fec19&app_key=483c6a76cb6386a4eaf149a5505868b8`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          searchResults: body.hits,
          loading: false

        })
      })
  }

  render(){
    return (
      <div className="app">
        <Header changeDisplay={this.changeDisplay}/>
        {this.state.display === 'fridge'
        ?(<React.Fragment>
          <IngredientAdd retrieveItem={this.retrieveItem} />
           <Fridge stock={this.state.stock}
                   activeIngredients={this.state.activeIngredients}
                   retrieveItem={this.retrieveItem}
                   removeItem={this.removeItem}
                   fetchRecipes={this.fetchRecipes}
                   changeDisplay={this.changeDisplay} />
                 </React.Fragment> )
          : null }

        {this.state.loading === true
          ? <Loading />
          : null
        }

        {this.state.display === 'recipes' && this.state.loading === false
        ? <SearchRecipes stock={this.state.stock}
                         recipeResults={this.state.searchResults}
                         retrieveItem={this.retrieveItem}
                     />
        : null}

        {this.state.display === 'favourites'
        ? <SearchRecipes stock={this.state.stock}
                         recipeResults={this.state.favourites}
                         retrieveItem={this.retrieveItem}
                       />
        : null
        }

      </div>
    )
  }
}

export default App;
