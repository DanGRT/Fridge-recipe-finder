import React from "react"
import IndividualRecipe from "./IndividualRecipe.js"
// import Loader from 'react-loader-spinner'

import '../styles/components/SearchRecipes.scss'


class SearchRecipes extends React.Component{
  constructor(){
    super()


    this.handlePagination= this.handlePagination.bind(this)

  }


  handlePagination(event){
    event.preventDefault()
    let page;
    event.target.value === 'next'
      ? page = this.props.page + 20
      : page = this.props.page - 20
    this.props.retrievePage(page, "page")
    this.props.fetchRecipes(page)
  }

  render(){
    return (

      <div className="search-recipes">
        {this.props.recipeResults.map(result => {
          return <IndividualRecipe key={result.recipe.uri}
                                   recipe={result.recipe}
                                   entireRecipe={result}
                                   stock={this.props.stock}
                                   retrieveItem={this.props.retrieveItem}
                                   removeItem={this.props.removeItem}
                                   favourites={this.props.favourites}
                                 />
        })}
        <button value="previous" onClick={this.handlePagination}>Previous</button><button value="next" onClick={this.handlePagination}>Next</button>

      </div>
    )
  }
}


export default SearchRecipes;
