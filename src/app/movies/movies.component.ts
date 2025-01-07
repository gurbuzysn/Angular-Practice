import { Component } from "@angular/core";
//import {Movie} from '../movie';


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
})

export class MoviesComponent{
    title: string = 'Filmler Sayfası';
    movies= ['movie 1', 'movie 2', 'movie 3'];

}