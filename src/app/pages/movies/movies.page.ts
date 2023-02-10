import {Component, OnInit} from '@angular/core';
import {MovieService} from 'src/app/services/movie.service';
import {environment} from 'src/environments/environment';
import {ApiResult, Movie} from "../../entities/models";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.page.html',
    styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
    movies: Movie[] = [];
    currentPage = 1;
    imageBaseUrl = environment.images;

    constructor(
        private movieService: MovieService,
    ) {
    }

    ngOnInit() {
        this.movieRequest();
    }

    loadMore(event: any) {
        setTimeout(() => {
            this.currentPage++;
            this.movieRequest();
            event.target.complete();
        }, 500);
    }

    movieRequest() {
        this.movieService.getTopRatedMovies(this.currentPage).subscribe({
            next: (res: ApiResult) => {
                this.movies.push(...res.results)
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
}
