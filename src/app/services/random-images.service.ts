import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomImagesService {

  constructor() { }

  getRandomImage(): String {
    var http = new XMLHttpRequest();
    var url = "";
    var urlIsGood = false;

    while (urlIsGood == false) {
      url = "https://picsum.photos/id/" + Math.floor(Math.random() * 500) + "/64/64";
      http.open('HEAD', url, false);
      http.send();

      if (http.status != 404) {
        urlIsGood = true;
      }
    }
    
    return url;
  }
}
