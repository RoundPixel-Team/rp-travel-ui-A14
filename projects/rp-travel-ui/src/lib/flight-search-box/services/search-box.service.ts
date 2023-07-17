import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBoxService {

  constructor() { }

  log(message:string){
    console.log("my message is " + message)
  }
}
