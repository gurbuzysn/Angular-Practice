import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  message: string[] = [];

 
  add(message : string){
    this.message.push(message);
  }

  clear(){
    this.message = [];
  }

  constructor() { }
}
