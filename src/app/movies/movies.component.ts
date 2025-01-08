import { Component } from "@angular/core";
import {Movie} from '../movie';


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
})

export class MoviesComponent{
    title: string = 'Filmler Sayfası';
    
    movie: Movie = {
        id: 1,
        name: 'Movie 1'
    };
}