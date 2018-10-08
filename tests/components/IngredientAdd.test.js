import React from 'react';
import IngredientAdd from '../../src/components/IngredientAdd';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'


describe('IngredientAdd', () => {
  test('handleSubmit passes text input', () => {
    const mockTextInput = 'apple'
    const submitEvent = {
      preventDefault: jest.fn()
    }

    const changeEvent = {
      target: {
        value: mockTextInput
      }
    }

    const mockRetrieveIngredient = jest.fn()

    const wrapper = shallow(<IngredientAdd retrieveItem={mockRetrieveIngredient} />)
    wrapper.find('input').simulate("change", changeEvent)
    wrapper.find('form').simulate("submit", submitEvent)
    // expect()

    expect(submitEvent.preventDefault).toHaveBeenCalled()
    expect(mockRetrieveIngredient.mock.calls[0][0]).toHaveProperty('ingredient', mockTextInput)

  })
})
