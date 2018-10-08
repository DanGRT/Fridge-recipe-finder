import React from "react"
import IndividualRecipe from "./IndividualRecipe.js"
// import Loader from 'react-loader-spinner'

import '../styles/components/SearchRecipes.scss'


class SearchRecipes extends React.Component{
  constructor(){
    super()
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
                                 />
        })}

      </div>
    )
  }
}

export default SearchRecipes;
