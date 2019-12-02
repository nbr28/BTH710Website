import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomImagesService {

  constructor() { }

  getRandomImage(): String {
    return "https://picsum.photos/id/"+Math.floor(Math.random()*500)+"/64/64";
  }
}
