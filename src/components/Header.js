import React from 'react'
import '../styles/components/Header.scss'

class Header extends React.Component{
  constructor(){
    super()

    this.returnFridge = this.returnFridge.bind(this)
  }

  returnFridge(event){
    event.preventDefault()
    this.props.changeDisplay('fridge')
  }


  render(){

    return (
      <header className="header">
        <h1 className="header__logo-text">Fridge</h1>
        <div className='header__nav'>
           <a href="" onClick={this.returnFridge} className='header__nav-link'>My <br/>Fridge</a>
           <a href="" className='header__nav-link'>Saved <br /> Recipes</a>

        </div>
      </header>
    )
  }

}


export default Header
