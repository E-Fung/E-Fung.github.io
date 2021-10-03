import axios from 'axios';
import { pokeNameUrlObj, pokeNameUrl, pokeMainData, typeNameUrlObj, typeNameUrl } from '../model/pokeModels';

export const getSinglePoke = (apiUrl: string): Promise<pokeMainData> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getApiEvolData = (apiUrl: string) => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getApiEvolUrl = (apiUrl: string) => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

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

export const getListTypeInfo = (listType: any[]): Promise<any[]> => {
  let promiseArray: any[] = [];
  for (let i = 0; i < listType.length; i++) {
    promiseArray.push(axios.get(listType[i].type.url));
  }
  return Promise.all(promiseArray);
};
