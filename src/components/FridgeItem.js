import React from "react"
import cx from "classnames"

import '../styles/components/FridgeItem.scss'

class FridgeItem extends React.Component{
  constructor(){
    super()


    this.handleClick = this.handleClick.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }



  handleClick(event){
    if (!this.props.isSelected){
      this.props.retrieveItem(this.props.item, "activeIngredients")
    }else{
      this.props.removeItem(this.props.item, "activeIngredients")
    }
  }

  handleRemove(event){
    event.preventDefault()
    this.props.removeItem(this.props.item, "stock")
  }


  render(){
    const classes = cx({
      'fridge-item': !this.props.isSelected,
      'fridge-item--selected': this.props.isSelected

    })

    return(
    <li className={classes} onClick={this.handleClick}>{this.props.item.ingredient} <a href="" className="fridge-item__remove" onClick={this.handleRemove}><i className="fas fa-trash-alt"></i></a> </li>
  )
  }
}

export default FridgeItem
