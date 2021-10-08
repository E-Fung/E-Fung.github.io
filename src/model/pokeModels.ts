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

export interface Move2 {
  name: string;
  url: string;
}
export interface Move {
  move: Move2;
}

export interface pokeMainData {
  data: {
    types: pokeType[];
    name: string;
    id: number;
    species: {
      url: string;
    };
    moves: Move[];
    stats: {};
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
