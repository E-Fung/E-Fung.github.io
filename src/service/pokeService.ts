import axios from 'axios';
import { pokeNameUrlObj, pokeNameUrl, pokeMainData, typeNameUrlObj, typeNameUrl } from '../model/pokeModels';

export const getBasicPoke = (apiUrl: string): Promise<pokeNameUrlObj> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getPokeList = (listPokeData: pokeNameUrl[]): Promise<pokeMainData[]> => {
  let promiseArray = [];
  for (let i = 0; i < listPokeData.length; i++) {
    promiseArray.push(axios.get(listPokeData[i].url));
  }
  return Promise.all(promiseArray);
};

export const getBasicType = (apiUrl: string): Promise<typeNameUrlObj> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getTypePokeList = (listPokeData: typeNameUrl[]): Promise<pokeMainData[]> => {
  let promiseArray = [];
  for (let i = 0; i < listPokeData.length; i++) {
    promiseArray.push(axios.get(listPokeData[i].pokemon.url));
  }
  return Promise.all(promiseArray);
};
