import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsAchievementsComponent } from './friends-achievements.component';

describe('FriendsAchievementsComponent', () => {
  let component: FriendsAchievementsComponent;
  let fixture: ComponentFixture<FriendsAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
