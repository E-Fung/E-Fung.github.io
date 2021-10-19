export interface PokeTypeModel {
  type: {
    url?: string;
    name: string;
  };
}

export interface PokeNameUrlModel {
  url: string;
  name: string;
}

export interface TypeSpecificModel {
  pokemon: PokeNameUrlModel;
}

export interface TypeSpecificAPIReturnModel {
  data: {
    pokemon: TypeSpecificModel[];
  };
}

export interface PokeAPIReturnModel {
  data: {
    results: PokeNameUrlModel[];
  };
}
export interface MoveLowLevelModel {
  name: string;
  url: string;
}
export interface MoveLearnMethodModel {
  name: string;
  url: string;
}
export interface VersionGroupModel {
  name: string;
  url: string;
}
export interface VersionGroupDetailModel {
  level_learned_at: number;
  move_learn_method: MoveLearnMethodModel;
  version_group: VersionGroupModel;
}
export interface PokeMoveModel {
  move: MoveLowLevelModel;
  data: {
    type: {
      name: string;
    };
  };
  version_group_details: VersionGroupDetailModel[];
  type: string;
}

export interface PokeMainDataModel {
  data: {
    types: PokeTypeModel[];
    name: string;
    id: number;
    species: {
      url: string;
    };
    moves: PokeMoveModel[];
    stats: PokeStatsModel[];
    sprites: {
      front_default: string;
      back_default: string;
      front_shiny: string;
      back_shiny: string;
    };
  };
}

export interface PokeEvolModel {
  name: string;
  url: string;
}

export interface StatModel {
  name: string;
  url: string;
}

export interface PokeStatsModel {
  base_stat: number;
  effort: number;
  stat: StatModel;
}
