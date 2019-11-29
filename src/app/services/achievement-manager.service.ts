import { Injectable } from '@angular/core';
import haloAchievements from '../../data/getHalo3Achivments.json';
import portalAchievements from '../../data/getPortalAchivments.json';

@Injectable({
  providedIn: 'root'
})
export class AchievementManagerService {
  allAchievements: any[] = [];
  pinnedAchievements: any[] = [];
  listOfPlatforms: any[] = [];
  initialPinsSet: boolean = false;

  constructor() {
    
  }

  getAllAchievements() {
    this.listOfPlatforms.push("PC");
    this.listOfPlatforms.push("Xbox");

    portalAchievements.forEach(function (element, i) {
      if(i % 2 == 0) {
        element["consolePlatform"] = "PC";
      }
      else {
        element["consolePlatform"] = "Xbox";
      }

      element["game"] = "Portal";
      element["pinned"] = false;
    });

    haloAchievements.forEach(function (element, i) {
      if(i % 2 == 0) {
        element["consolePlatform"] = "PC";
      }
      else {
        element["consolePlatform"] = "Xbox";
      }

      element["game"] = "Halo 3";
      element["pinned"] = false;
    });

    this.allAchievements = portalAchievements.concat(haloAchievements);

    if (this.initialPinsSet == false) {
      this.initializePinned();
    }

    return this.allAchievements;
  }

  getPinnedAchievements() {
    return this.pinnedAchievements;
  }

  getAchievementsByConsole(consoleValue: any) {
    var achievementsByConsole;
    this.allAchievements.forEach(element => {
      if (element["consolePlatform"].toLowerCase() == consoleValue.toLowerCase()) {
        achievementsByConsole.push(element);
      }
    });

    return achievementsByConsole;
  };

  getAchievementsByGame(gameName: any) {
    if (gameName.toLowerCase() == "portal") {
      return portalAchievements;
    }
    else {
      return haloAchievements;
    }
  }

  initializePinned() {
    var numberOfPinnedTrophies = Math.round((Math.random() * 20) + 1);
    var usedIndexes = [];

    for (var i = 0; i < numberOfPinnedTrophies; i++) {
      var trophyToPin = Math.round((Math.random() * this.allAchievements.length));

      if (!usedIndexes.includes(trophyToPin)) {
        this.allAchievements[trophyToPin].pinned = true;
        this.addAchievementToPinned(this.allAchievements[trophyToPin]);
        usedIndexes.push(trophyToPin);
      }
      else {
        i--;
      }
    }

    this.initialPinsSet = true;
  }

  addAchievementToPinned(achievementToAdd: any) {
    this.pinnedAchievements.push(achievementToAdd);
  }

  removeAchievementToPinned(achievementToRemove: any) {
    //this.pinnedAchievements.remove(achievementToRemove);
  }
}
