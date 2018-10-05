import React from 'react'

import '../styles/components/Loading.scss';

function Loading(props){
  return (
    <div className='loading'>
      <img className='loading__spinner' src='../../images/ajax-loader.gif'/>
      <h3 className='loading__text'>Finding Recipes...</h3>
    </div>
  )
}


export default Loading
