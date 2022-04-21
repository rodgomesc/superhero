import {call, put, StrictEffect} from 'redux-saga/effects';

import {setHeroes, setLoading} from './heroesSlice';
import {heroesRequest} from './heroesRequests';

import {AxiosResponse} from 'axios';
import {IHero} from '@sharedInterfaces/Hero';

interface IHeroResponse {
  data: IHero[];
}

type handleGetHeroesProps = Generator<
  StrictEffect,
  void, // return value
  any // argument
>;

function* handleGetHeroes(): handleGetHeroesProps {
  try {
    yield put({type: setLoading.type, payload: true});
    const response: AxiosResponse<IHeroResponse> = yield call(heroesRequest);
    yield put({type: setHeroes.type, payload: response.data});
    yield put({type: setLoading.type, payload: false});
  } catch (error) {
    console.log('error >>', error);
  }
}

export default handleGetHeroes;
