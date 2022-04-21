import React from 'react';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import store from '@store/rootStore';
import {Provider} from 'react-redux';
import SuperHeroListItem from './index';
import {IHero} from '@app/sharedInterfaces/Hero';

const mockedHero: IHero = {
  id: 1,
  alterEgo: 'Batman',
  name: 'Bruce Wayne',
  description: 'mocked description',
  imgUrl: 'http://mocked.url',
  comic: 'Marvel',
};

describe('Home', () => {
  it('should render SuperHeroListItem with correct properties', () => {
    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <SuperHeroListItem hero={mockedHero} />
      </Provider>,
    );
    expect(getByTestId('super-hero-list-container')).toBeTruthy();

    expect(
      getByText(`${mockedHero.alterEgo} / ${mockedHero.name}`),
    ).toBeTruthy();

    expect(getByText(mockedHero.description)).toBeTruthy();
    expect(getByText(mockedHero.comic)).toBeTruthy();
  });
});
