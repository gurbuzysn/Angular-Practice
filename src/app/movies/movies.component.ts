import { Component } from "@angular/core";
import {Movies} from '../movie.datasource';


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
})

export class MoviesComponent{
    title: string = 'Filmler Sayfası';
    movies= Movies;

}