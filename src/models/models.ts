export interface Country {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    borders: Array<string>;
    topLevelDomain: Array<string>;
    currencies: Array<Currencies>;
    languages: Array<Languages>;
    flag: string;
    navigate: any
}

export type CardListItem = {
    title: string;
    description: string;
}

export type Options = {
    value: string;
    label: string;
}

export type Region = {
    value: string;
}

export type Languages = {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export type Currencies = {
    code: string;
    name: string;
    symbol: string;
}

export type SelectOptions = {
    label: string
    value: string
}