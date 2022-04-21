import axios from 'axios';

import {IHero} from '@sharedInterfaces/Hero';

export function heroesRequest() {
  return axios.request<IHero[]>({
    method: 'get',
    url: 'https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes',
  });
}
