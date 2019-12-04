import { Component, OnInit } from '@angular/core';
import {RandomImagesService} from '../services/random-images.service'
@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  achievements: any[];
  listOfAchievements: any[];
  listOfUserPictures: any[];
  names: Array<String>;
  lastAchievement: any;

  constructor(public randomImageService: RandomImagesService) {
    this.names = [];
    this.listOfAchievements = [];
    this.listOfUserPictures = [];
    }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.randomUserName();
      this.listOfUserPictures.push(this.randomImageService.getRandomImage());
      this.listOfAchievements.push(this.randomDate());
    }
  }


  randomUserName() {
    this.names.push(Math.random().toString(16).substring(2, 5) + Math.random().toString(16).substring(2, 5));
    return this.names[this.names.length - 1];
  }
  // randomUserAchievement() {
  //   this.lastAchievement = this.achievements[Math.floor(Math.random() * this.achievements.length)];
  //   return this.lastAchievement.name;
  // }

  randomDate()
  {
    var start =new Date(2018, 0, 1);
    var end =  new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  }
}
