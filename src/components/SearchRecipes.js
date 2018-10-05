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
        {this.props.searchResults.map(result => {
          return <IndividualRecipe key={result.recipe.uri}
                                   recipe={result.recipe}
                                   stock={this.props.stock}
                                 />
        })}

      </div>
    )
  }
}

export default SearchRecipes;
