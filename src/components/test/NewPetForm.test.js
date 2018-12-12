import React from 'react';
import NewPetForm from '../NewPetForm';
import { shallow } from 'enzyme';

describe('NewPetForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow(
      <NewPetForm addPetCallback={() => {} } />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
