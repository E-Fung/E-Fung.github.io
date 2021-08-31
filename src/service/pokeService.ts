import axios from 'axios';
import { pokeNameUrlObj, pokeNameUrl, pokeMainData } from '../model/pokeModels';

export const getBasicApi = (apiUrl: string): Promise<pokeNameUrlObj> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getPokeList = (listPokeData: pokeNameUrl[]): Promise<pokeMainData[]> => {
  let promiseArray = [];
  for (let i = 0; i < listPokeData.length; i++) {
    promiseArray.push(axios.get(listPokeData[i].url));
  }
  return Promise.all(promiseArray);
};
