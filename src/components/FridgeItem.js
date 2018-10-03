import React from "react"
import cx from "classnames"

class FridgeItem extends React.Component{
  constructor(){
    super()

    this.state = {
      selected: false
    }

    this.handleClick = this.handleClick.bind(this)


  }

  handleClick(event){
    this.setState({
      selected: !this.state.selected
    })
  }


  render(){
    return(
    <li onClick={this.handleClick}>{this.props.item.ingredient}</li>
    )
  }
}

export default FridgeItem
