export interface pokeType {
  type: {
    url: string;
    name: string;
  };
}

export interface pokeNameUrl {
  url: string;
  name: string;
}

export interface typeNameUrl {
  pokemon: pokeNameUrl;
}

export interface typeNameUrlObj {
  data: {
    pokemon: typeNameUrl[];
  };
}

export interface pokeNameUrlObj {
  data: {
    results: pokeNameUrl[];
  };
}
export interface Move {
  name: string;
  url: string;
}
export interface MoveLearnMethod {
  name: string;
  url: string;
}
export interface VersionGroup {
  name: string;
  url: string;
}
export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}
export interface MoveInterface {
  move: Move;
  data: {
    type: {
      name: string;
    };
  };
  version_group_details: VersionGroupDetail[];
  type: string;
}

export interface pokeMainData {
  data: {
    types: pokeType[];
    name: string;
    id: number;
    species: {
      url: string;
    };
    moves: MoveInterface[];
    stats: PokeStatsModel[];
    sprites: {
      front_default: string;
      back_default: string;
      front_shiny: string;
      back_shiny: string;
    };
  };
}

export interface pokeEvol {
  name: string;
  url: string;
}

export interface Stat {
  name: string;
  url: string;
}

export interface PokeStatsModel {
  base_stat: number;
  effort: number;
  stat: Stat;
}
