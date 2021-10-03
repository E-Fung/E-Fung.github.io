import { useState, useEffect } from 'react';
import { getListTypeInfo } from './../../service/pokeService';
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
    tempTypeInfo.map((type): void => {
      type.data.damage_relations.double_damage_from.map((innerType: any) => {
        tempWeaknessList.push(innerType.name);
      });
    });
    tempTypeInfo.map((type): void => {
      type.data.damage_relations.half_damage_from.map((innerType: any) => {
        let index = tempWeaknessList.indexOf(innerType.name);
        if (index > -1) {
          tempWeaknessList.splice(index, 1);
        }
      });
    });
    console.log(tempWeaknessList);
    setWeaknessList(tempWeaknessList);
  };
  if (!weaknessList) {
    return <></>;
  }
  return (
    <>
      {weaknessList.map((type) => (
        <p style={{ color: 'black' }}>{type}</p>
      ))}
    </>
  );
};
