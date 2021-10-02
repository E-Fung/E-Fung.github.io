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

export interface pokeMainData {
  data: {
    types: pokeType[];
    name: string;
    id: number;
    species: {
      url: string;
    };
  };
}

export interface pokeEvol {
  name: string;
  url: string;
}
