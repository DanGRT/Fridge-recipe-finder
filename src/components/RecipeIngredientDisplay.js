import React from "react"
import '../styles/components/RecipeIngredientDisplay.scss'

class RecipeIngredientDisplay extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        {this.props.recipeIngredients.map(item => {
          if (this.props.matchingIngredients.some(arrVal => item === arrVal)){
            return <li className="recipe-ingredient--in-stock"><strong>{item.text}</strong></li>
          }else{
            return <li className='recipe-ingredient'>{item.text}</li>
          }
        })}
      </div>
    )
  }
}

export default RecipeIngredientDisplay;
