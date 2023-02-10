import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from 'src/app/services/movie.service';
import {environment} from 'src/environments/environment';
import {MovieDetail} from "../../entities/models";

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.page.html',
    styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
    movie: MovieDetail | undefined;
    imageBaseUrl = environment.images;

    constructor(
        private route: ActivatedRoute,
        private movieService: MovieService
    ) {
    }

    async ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');

        this.movieService.getMovieDetails(id).subscribe({
            next: (res: MovieDetail) => {
                this.movie = res;
            }
        });
    }

    openHomepage(url: string) {
        window.open(url, '_blank');
    }
}
