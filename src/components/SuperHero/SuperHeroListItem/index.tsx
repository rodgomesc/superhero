import React from 'react';
import {Dimensions} from 'react-native';

import {IHero} from '@sharedInterfaces/Hero';

import * as S from './styles';

const {width, height} = Dimensions.get('window');

const IMG_W = width * 0.8;
const IMG_H = height * 0.5;

interface SuperHeroListItemProps {
  hero: IHero;
}

const SuperHeroListItem: React.FC<SuperHeroListItemProps> = ({hero}) => {
  return (
    <S.SuperHeroListItemContainer testID="super-hero-list-container">
      <S.HeroInfoWrapper>
        <S.AlterEgo>
          {hero.alterEgo} / {hero.name}
        </S.AlterEgo>
        <S.Description>{hero.description}</S.Description>
      </S.HeroInfoWrapper>
      <S.HeroCard width={width}>
        <S.HeroCardImage
          source={{uri: hero.imgUrl}}
          width={IMG_W}
          height={IMG_H}
        />
      </S.HeroCard>
      <S.Comic>{hero.comic}</S.Comic>
    </S.SuperHeroListItemContainer>
  );
};

export default SuperHeroListItem;
