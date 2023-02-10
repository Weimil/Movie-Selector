import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiResult, MovieDetail} from "../entities/models";

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    constructor(
        private http: HttpClient
    ) {
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
