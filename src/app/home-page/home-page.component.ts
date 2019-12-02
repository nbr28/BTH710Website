import { Component, OnInit } from '@angular/core';
import { AchievementManagerService } from '../services/achievement-manager.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  achievements: any[];
  names: Array<String>;
  lastAchievement:any;
  numbers: Number[];
  constructor(private achievementService: AchievementManagerService) { 
    this.names=[];
    this.numbers = Array(25).fill(1).map((x,i)=>i); // used to generate the feed
    this.achievementService.getAllAchievements();
    this.achievements = this.achievementService.getAchievementsByGame("portal");
    this.achievements=this.achievements.concat(this.achievementService.getAchievementsByGame("halo 3"));
  }

  ngOnInit() {
  }

  randomUserName() {
    // console.log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    this.names.push(Math.random().toString(16).substring(2, 5) + Math.random().toString(16).substring(2, 5));
    return this.names[this.names.length-1];
  }
  randomUserAchievement()
  {
    this.lastAchievement=this.achievements[Math.floor(Math.random()*this.achievements.length)];
    return this.lastAchievement.name
  }
  lastAchievementImg()
  {
    return this.lastAchievement.imageUnlocked
  }


}
