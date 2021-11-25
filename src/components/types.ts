export interface ITabs {
    title: string;
    id: string;
}

export interface IForm {
    isOpen: boolean;
    modalClose: () => void;
    addMovie: any
}
export interface IInput {
    value: string;
    placeholder: string;
    label: string;
    type: string;
    onchange: any;
    id: string;
    name: string;
    width: string;
    marginRight?: string;
    height?: string;
}

export interface IMovie {
    id: number;
    title: string;
    vote_average: number;
    genres: string[];
    overview: string;
    release_date: string;
    poster_path: string;
    runtime: number;
    budget: number;
    revenue: number;
    tagline: string;
    vote_count: number;
}

export interface IMoviesCards {
    data: IMovie[];
    edit: any;
    add: any;
    deleteHandler: any;
    selectMovieHandler: (id: string) => {};

}