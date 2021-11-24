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
    id: string;
    title: string;
    rate: string;
    genre: string[];
    description: string;
    releaseDate: string;
    url: string;
    runtime: string;
}

export interface IMoviesCards {
    data: IMovie[];
    edit: any;
    add: any;
    deleteHandler: any;
    selectMovieHandler: (id: string) => {};

}