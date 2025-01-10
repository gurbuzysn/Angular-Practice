import { Component } from "@angular/core";
import {Movie} from '../movie';


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
})

export class MoviesComponent{
    title: string = 'Filmler Sayfası';
    
   movies = ['Movie 1', 'Movie 2', 'Movie 33']
}