export interface ApiResult {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: number;
}

export interface MovieDetail {
    id: number;
    title: string;
    poster_path: string;
    genres: any;
    overview: string;
    release_date: string;
    tagline: string;
    budget: number;
    homepage: string;
}
