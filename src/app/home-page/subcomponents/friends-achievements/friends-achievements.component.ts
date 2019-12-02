import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friends-achievements',
  templateUrl: './friends-achievements.component.html',
  styleUrls: ['./friends-achievements.component.css']
})
export class FriendsAchievementsComponent implements OnInit {

  @Input()
  userName: string;
  @Input()
  userAchievement: string;
  @Input()
  userImg: string;
  @Input()
  userAImg: string;

  constructor() { }

  ngOnInit() {
  }

}
