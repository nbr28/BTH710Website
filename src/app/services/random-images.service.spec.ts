import { TestBed } from '@angular/core/testing';

import { RandomImagesService } from './random-images.service';

describe('RandomImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomImagesService = TestBed.get(RandomImagesService);
    expect(service).toBeTruthy();
  });
});
