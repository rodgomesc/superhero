import React, {useCallback, useEffect, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Animated,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {RootState} from '@store/rootStore';
import {getHeroes} from '@store/features/heroes/heroesSlice';

import * as S from './styles';
import SuperHeroListItem from '../SuperHeroListItem';
import {IHero} from '@app/sharedInterfaces/Hero';

const {width} = Dimensions.get('window');

const SuperHeroList: React.FC = () => {
  const {
    heroesStore: {heroes, loading},
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const scrollX = useRef(new Animated.Value(0)).current;

  const onComponentMount = useCallback(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  useEffect(() => {
    onComponentMount();
  }, [onComponentMount]);

  const renderAbsoluteBackGroundStack = () =>
    heroes.map((heroe, idx) => {
      const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]; // prev //curr //next
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
      });
      return (
        <Animated.Image
          testID="background-stack-item"
          key={`image-${idx}`}
          style={[StyleSheet.absoluteFillObject, {opacity: opacity}]}
          source={{uri: heroe.imgUrl}}
          blurRadius={15}
        />
      );
    });

  if (loading) {
    return (
      <ActivityIndicator
        style={[StyleSheet.absoluteFillObject, {top: '50%', bottom: '50%'}]}
        testID="activity-indicator"
        size="large"
        color="#000"
      />
    );
  }

  return (
    <>
      {renderAbsoluteBackGroundStack()}
      <S.HeroesList
        testID="heroes-list"
        showsHorizontalScrollIndicator={false}
        data={heroes}
        pagingEnabled
        horizontal
        renderItem={({item}: ListRenderItemInfo<IHero>) => (
          <SuperHeroListItem hero={item} />
        )}
        keyExtractor={(item: IHero) => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
      />
    </>
  );
};

export default SuperHeroList;
