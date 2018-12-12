import React from 'react';
import Pet from '../Pet';
import { shallow } from 'enzyme';

describe('Pet', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow(
      <Pet
        name="test name"
        breed="test breed"
        />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
