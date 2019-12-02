import { Component, OnInit } from '@angular/core';
import { AchievementManagerService } from '../services/achievement-manager.service';

@Component({
  selector: 'app-achievements-page',
  templateUrl: './achievements-page.component.html',
  styleUrls: ['./achievements-page.component.css']
})
export class AchievementsPageComponent implements OnInit {
  pinnedAchievements: any[];
  portalAchievements: any[];
  haloAchievements: any[];

  constructor(private achievementService: AchievementManagerService) {
    this.achievementService.getAllAchievements();
    this.pinnedAchievements = this.achievementService.getPinnedAchievements();
    this.portalAchievements = this.achievementService.getAchievementsByGame("portal");
    this.haloAchievements = this.achievementService.getAchievementsByGame("halo 3");
   }

  ngOnInit() {
    

    console.log(this.pinnedAchievements);
  }
}
