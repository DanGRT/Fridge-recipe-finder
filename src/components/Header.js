import React from 'react'
import '../styles/components/Header.scss'

class Header extends React.Component{
  constructor(){
    super()

    this.returnFridge = this.returnFridge.bind(this)
  }

  returnFridge(){
    this.props.changeDisplay('fridge')
  }


  render(){

    return (
      <header className="header">
        <h1 className="header__logo-text">Fridge</h1>
        <ul className='header__nav'>
          <li onClick={this.returnFridge} className='header__navLink'>My Fridge</li>
          <li className='header__navLink'>Saved Recipes</li>
        </ul>
      </header>
    )
  }

}


export default Header
