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
  };
}
