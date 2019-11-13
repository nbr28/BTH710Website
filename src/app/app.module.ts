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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ProfilePageComponent,
    AchievementsPageComponent,
    FriendsPageComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
