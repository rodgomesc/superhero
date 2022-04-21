import React from 'react';
import {StatusBar} from 'react-native';

import SuperHeroList from '@components/SuperHero/SuperHeroList';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container testID="home-container">
      <StatusBar hidden />
      <SuperHeroList />
    </S.Container>
  );
};

export default Home;
