import React from 'react';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import store from '@store/rootStore';
import {Provider} from 'react-redux';
import Home from './index';

describe('Home', () => {
  it('should render Home screen  correctly', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(getByTestId('home-container')).toBeTruthy();
  });
});
