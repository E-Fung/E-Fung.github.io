import { useState, useEffect } from 'react';
import { getListTypeInfo } from './../../service/pokeService';
import { PokeType } from './../subcomponents/PokeType';
type Props = { pokeTypes: any };
export const PokeWeakness: React.FC<Props> = ({ pokeTypes }) => {
  const [weaknessList, setWeaknessList] = useState<any[]>();

  useEffect(() => {
    getTypeInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTypeInfo = async () => {
    let tempTypeInfo = await getListTypeInfo(pokeTypes);
    let tempWeaknessList: string[] = [];
    tempTypeInfo.forEach((type) => {
      type.data.damage_relations.double_damage_from.forEach((innerType: any) => {
        tempWeaknessList.push(innerType.name);
      });
    });
    tempTypeInfo.forEach((type) => {
      type.data.damage_relations.half_damage_from.forEach((innerType: any) => {
        let index = tempWeaknessList.indexOf(innerType.name);
        if (index > -1) {
          tempWeaknessList.splice(index, 1);
        }
      });
    });
    let objWeaknessList = tempWeaknessList.map((itr) => ({ type: { name: itr } }));
    console.log(objWeaknessList);
    setWeaknessList(objWeaknessList);
  };
  if (!weaknessList) {
    return <></>;
  }
  return (
    <>
      <PokeType types={weaknessList} />
    </>
  );
};
