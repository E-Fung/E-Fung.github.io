import { useState, useEffect } from 'react';
import { getListTypeInfo } from './../../service/pokeService';
import { PokeType } from './../subcomponents/PokeType';
import { Star } from '@material-ui/icons';
import { PokeTypeModel } from './../../model/pokeModels';
import { CircularProgress } from '@material-ui/core';

type Props = { pokeTypes: PokeTypeModel[] };

export const PokeWeakness: React.FC<Props> = ({ pokeTypes }) => {
  const [weaknessList, setWeaknessList] = useState<PokeTypeModel[]>();
  const [superWeaknessList, setSuperWeaknessList] = useState<PokeTypeModel[]>();

  useEffect(() => {
    getTypeInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTypeInfo = async (): Promise<void> => {
    let tempTypeInfo = await getListTypeInfo(pokeTypes);
    let tempWeaknessList: string[] = [];
    tempTypeInfo.forEach((type) => {
      //add all weaknesses into an array
      type.data.damage_relations.double_damage_from.forEach((innerType: any) => {
        tempWeaknessList.push(innerType.name);
      });
    });
    tempTypeInfo.forEach((type) => {
      //some weaknesses are canceled out by another type's resistance
      type.data.damage_relations.half_damage_from.forEach((innerType: any) => {
        let index = tempWeaknessList.indexOf(innerType.name);
        if (index > -1) {
          tempWeaknessList.splice(index, 1);
        }
      });
    });
    //some weaknesses are stronger than others (when both types share that weakness)
    let superWeaknessList: string[] = tempWeaknessList.filter((type, index) => tempWeaknessList.indexOf(type) !== index);
    tempWeaknessList = tempWeaknessList.filter((type, index) => superWeaknessList.indexOf(type) === -1);

    let objSuperWeakList: PokeTypeModel[] = superWeaknessList.map((itr) => ({ type: { name: itr } }));
    let objWeaknessList: PokeTypeModel[] = tempWeaknessList.map((itr) => ({ type: { name: itr } }));
    setWeaknessList(objWeaknessList);
    setSuperWeaknessList(objSuperWeakList);
  };

  if (!weaknessList || !superWeaknessList) {
    return <CircularProgress />;
  }

  return (
    <>
      <PokeType types={superWeaknessList}>
        <Star />
      </PokeType>
      <PokeType types={weaknessList}></PokeType>
    </>
  );
};
