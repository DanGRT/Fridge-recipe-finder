import React from "react";

import '../styles/components/IngredientAdd.scss';
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
    this.props.retrieveItem(ingredientObject, 'stock')
    this.setState({
      text: ""
    })


  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })

  }


  render(){
    return(


        <form className='ingredient-add' onSubmit={this.handleSubmit}>
          <h3 className='ingredient-add__text'>Been Shopping?</h3>
          <div className='ingredient-add__form'>
          <input value={this.state.text} onChange={this.handleChange} type="text"></input>
          <button type="submit">Add</button>
          </div>
        </form>

    )
  }
}


export default IngredientAdd
