import React from "react";
const uuidv4 = require('uuid/v4');

class IngredientAdd extends React.Component{
  constructor(){
    super()

    this.state = {
      text: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const ingredientObject = {ingredient: this.state.text,
                              key: uuidv4()}
    this.props.retrieveIngredients(ingredientObject, 'stock')
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }



  render(){
    return(
      <form>
        <input onChange={this.handleChange} type="text"></input>
        <button onClick={this.handleSubmit} type="submit"></button>
      </form>
    )
  }
}


export default IngredientAdd
