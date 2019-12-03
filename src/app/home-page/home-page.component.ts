import { Component, OnInit } from '@angular/core';
import { AchievementManagerService } from '../services/achievement-manager.service';
import { RandomImagesService } from '../services/random-images.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  achievements: any[];
  listOfAchievements: any[];
  listOfUserPictures: any[];
  names: Array<String>;
  lastAchievement: any;

  constructor(private achievementService: AchievementManagerService, public randomImageService: RandomImagesService) {
    this.names = [];
    this.listOfAchievements = [];
    this.listOfUserPictures = [];
    this.achievements = this.achievementService.getAchievementsByGame("portal");
    this.achievements = this.achievements.concat(this.achievementService.getAchievementsByGame("halo 3"));
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.randomUserName();
      this.listOfUserPictures.push(this.randomImageService.getRandomImage());
      this.listOfAchievements.push(this.randomUserAchievement());
    }
  }


  randomUserName() {
    this.names.push(Math.random().toString(16).substring(2, 5) + Math.random().toString(16).substring(2, 5));
    return this.names[this.names.length - 1];
  }
  randomUserAchievement() {
    this.lastAchievement = this.achievements[Math.floor(Math.random() * this.achievements.length)];
    return this.lastAchievement.name;
  }
}
