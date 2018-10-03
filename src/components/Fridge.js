import React from "react"
import FridgeItem from "./FridgeItem.js"

class Fridge extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
    <div className="fridge">
      <ul>
        {this.props.stock.map(item => {
          return (
            <FridgeItem key={item.key} item={item}/>
          )
        })}


      </ul>
    </div>
    )
  }

}

export default Fridge;
