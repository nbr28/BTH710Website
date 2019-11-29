import { TestBed } from '@angular/core/testing';

import { AchievementManagerService } from './achievement-manager.service';

describe('AchievementManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AchievementManagerService = TestBed.get(AchievementManagerService);
    expect(service).toBeTruthy();
  });
});
