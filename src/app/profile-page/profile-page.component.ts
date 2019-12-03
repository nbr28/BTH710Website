import { Component, OnInit } from '@angular/core';
import { AchievementManagerService } from '../services/achievement-manager.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  pinnedAchievements: any[];
  allPinnedAchievements: any[];
  portalAchievements: any[];
  haloAchievements: any[];
  
  constructor(private achievementService: AchievementManagerService) { 
    this.achievementService.getAllAchievements();
    this.allPinnedAchievements = this.achievementService.getPinnedAchievements();
    
    var l=0;
    this.allPinnedAchievements.length < 5 ? this.pinnedAchievements = this.allPinnedAchievements : this.pinnedAchievements = new Array(5);
    for(var i = 0; i < this.pinnedAchievements.length; i++){
      this.pinnedAchievements[i]=this.allPinnedAchievements[i];
    }

    this.portalAchievements = this.achievementService.getAchievementsByGame("portal");
    this.haloAchievements = this.achievementService.getAchievementsByGame("halo 3");
    
  }

  ngOnInit() {
  }

}
