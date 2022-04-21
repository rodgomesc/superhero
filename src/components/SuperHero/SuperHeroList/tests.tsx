import React from 'react';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import SuperHeroList from './index';
import {IHero} from '@app/sharedInterfaces/Hero';

const mockedHeroes: IHero[] = [
  {
    id: 1,
    alterEgo: 'Batman',
    name: 'Bruce Wayne',
    description: 'mocked description',
    imgUrl: 'http://mocked.url',
    comic: 'Marvel',
  },
  {
    id: 2,
    alterEgo: 'Superman',
    name: 'Clark Kent',
    description: 'mocked description',
    imgUrl: 'http://mocked.url',
    comic: 'DC',
  },
];

// mock redux functions
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
  useSelector: () => ({
    heroesStore: {
      heroes: mockedHeroes,
      loading: false,
    },
  }),
}));

// mock getHeroes response
jest.mock('@store/features/heroes/heroesSlice', () => ({
  getHeroes: () => mockedHeroes,
}));

describe('SuperHeroList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should pass data correctly for listItem', () => {
    const {getByTestId} = render(<SuperHeroList />);
    const heroesList = getByTestId('heroes-list');
    expect(heroesList.props.children.length).toBe(mockedHeroes.length);
  });

  it('should render background stack images correctly', async () => {
    const {findAllByTestId} = render(<SuperHeroList />);
    const backgroundStack = await findAllByTestId('background-stack-item');
    expect(backgroundStack.length).toBe(mockedHeroes.length);
  });
});
