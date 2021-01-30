export type LoginData = {
    username: string;
    password: string;
}

export type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: number;
    reviews: Review[];
}

export type User = {
    id: number;
    name: string;
    email: string;
}

export type Review = {
    id: number;
    text: string;
    user: User;
    movieId: number;
}

export type Genre = {
    id: number;
    name: string;
}