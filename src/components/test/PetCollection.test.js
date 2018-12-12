import React from 'react';
import PetCollection from '../PetCollection';
import { shallow, mount } from 'enzyme';

const PETS = [
  {
    name: "test pet 1",
    breed: "breed"
  },
  {
    name: "test pet 2",
    breed: "breed"
  }
];

describe('PetCollection', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange

    const pets = PETS;
    const wrapper = shallow(
      <PetCollection
        pets={pets}
        />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test('renders without crashing even with no pets', () => {
    // First Mount the Component in the testing DOM
    // Arrange

    const pets = [];
    const wrapper = shallow(
      <PetCollection
        pets={pets}
        />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test('successfully deep mounts', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount(
      <PetCollection
        pets={PETS}
        />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
