import React from "react"
import FridgeItem from "./FridgeItem.js"

import '../styles/components/Fridge.scss';

class Fridge extends React.Component{
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(event){
    this.props.fetchRecipes()
    this.props.changeDisplay('recipes')
  }

  render(){
    return(
    <div className="fridge">
      <ul className='fridge__item-container'>
        {this.props.stock.map(item => {
          const isSelected = this.props.activeIngredients.find(ingredient => ingredient.key === item.key);
          return (
            <FridgeItem key={item.key}
                        item={item}
                        isSelected={isSelected}
                        retrieveItem={this.props.retrieveItem}
                        removeItem={this.props.removeItem}/>
          )
        })}
        {this.props.stock.length === 0
          ? <h3 className="fridge___no-items">No food? Try adding ingredients above</h3>
          : <button onClick={this.handleClick}>Find me recipes with selected</button>

        }



      </ul>
    </div>
    )
  }

}

export default Fridge;
