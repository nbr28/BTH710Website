import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AchievementsPageComponent } from './achievements-page/achievements-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { RouterModule } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { UserProfileImageComponent } from './home-page/subcomponents/user-profile-image/user-profile-image.component';
import { UserProfileInfoComponent } from './home-page/subcomponents/user-profile-info/user-profile-info.component';
import { FriendsAchievementsComponent } from './home-page/subcomponents/friends-achievements/friends-achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ProfilePageComponent,
    AchievementsPageComponent,
    FriendsPageComponent,
    UserProfileImageComponent,
    UserProfileInfoComponent,
    FriendsAchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
     
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'friends',
        component: FriendsPageComponent
      },
      {
        path: 'achievements',
        component: AchievementsPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: '**',
        component: HomePageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
