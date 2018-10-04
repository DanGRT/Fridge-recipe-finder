import React from 'react';
import App from '../../src/components/App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

describe('App', () => {
  test('initial state is correct', () => {
    const wrapper = shallow(<App />)
    const state = wrapper.state()
    expect(state.activeIngredients).toEqual([])
    expect(state.searchResults).toEqual([])
  })
  test('retrieveIngredients adds ingredient to correct state property', () =>{
    const ingredient = 'apple'
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.retrieveIngredients(ingredient, 'stock')
    const stock = wrapper.state('stock')
    expect(stock).toEqual([ingredient])
  })
  test('fetchRecipes sets search results in state', () => {
    
  })
});
