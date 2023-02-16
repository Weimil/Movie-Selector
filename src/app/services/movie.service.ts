import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiResult, Movie, MovieDetail} from "../entities/models";

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    movies: Movie[] = [];

    constructor(
        private http: HttpClient
    ) {
    }

    addOrRemoveMovie(movie: Movie) {
        for (const i in this.movies) {
            if (this.movies[i].id === movie.id) {
                this.movies.splice(Number(i), 1);
                return;
            }
        }

        this.movies.push(movie);
        console.log(this.movies)
    }

    getTopRatedMovies(page = 1): Observable<ApiResult> {
        const url = `${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}`;

        return this.http.get<ApiResult>(url);
    }

    getMovieDetails(id: string | null): Observable<MovieDetail> {
        const url = `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`;

        return this.http.get<MovieDetail>(url);
    }
}
