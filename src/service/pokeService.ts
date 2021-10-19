import axios from 'axios';
import { PokeAPIReturnModel, PokeNameUrlModel, PokeMainDataModel, TypeSpecificAPIReturnModel, TypeSpecificModel, PokeMoveModel } from '../model/pokeModels';
import { PokeSpeciesModel } from '../model/pokeSpecies';

export const getSinglePoke = (apiUrl: string): Promise<PokeMainDataModel> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getSinglePokeSpecies = (apiUrl: string): Promise<PokeSpeciesModel> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getApiEvolData = (apiUrl: string) => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getApiEvolUrl = (apiUrl: string) => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getBasicPoke = (apiUrl: string): Promise<PokeAPIReturnModel> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getPokeList = (listPokeData: PokeNameUrlModel[]): Promise<PokeMainDataModel[]> => {
  let promiseArray = [];
  for (let i = 0; i < listPokeData.length; i++) {
    promiseArray.push(axios.get(listPokeData[i].url));
  }
  return Promise.all(promiseArray);
};

export const getBasicType = (apiUrl: string): Promise<TypeSpecificAPIReturnModel> => {
  return axios.get(apiUrl).then((resp: any) => resp);
};

export const getTypePokeList = (listPokeData: TypeSpecificModel[]): Promise<PokeMainDataModel[]> => {
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

export const getTypeOfMove = (listType: PokeMoveModel[]): Promise<any[]> => {
  let promiseArray: any[] = [];
  for (let i = 0; i < listType.length; i++) {
    promiseArray.push(axios.get(listType[i].move.url));
  }
  return Promise.all(promiseArray);
};
