import React from "react"
import cx from "classnames"

import '../styles/components/FridgeItem.scss'

class FridgeItem extends React.Component{
  constructor(){
    super()


    this.handleClick = this.handleClick.bind(this)
  }



  handleClick(event){
    if (!this.props.isSelected){
      this.props.retrieveIngredients(this.props.item, "activeIngredients")
    }else{
      this.props.removeIngredients(this.props.item, "activeIngredients")
    }
  }


  render(){
    const classes = cx({
      'fridge-item': !this.props.isSelected,
      'fridge-item--selected': this.props.isSelected

    })

    return(
    <li className={classes} onClick={this.handleClick}>{this.props.item.ingredient} </li>
  )
  }
}

export default FridgeItem
