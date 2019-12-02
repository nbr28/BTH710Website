import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-image',
  templateUrl: './user-profile-image.component.html',
  styleUrls: ['./user-profile-image.component.css']
})
export class UserProfileImageComponent implements OnInit {
  @Input() imgSrc : string;
  constructor() {
   }

  ngOnInit() {
  }


}
