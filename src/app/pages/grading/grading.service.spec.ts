import { TestBed, inject } from '@angular/core/testing';

import { GradingService } from './grading.service';

describe('GradingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradingService]
    });
  });

  it('should be created', inject([GradingService], (service: GradingService) => {
    expect(service).toBeTruthy();
  }));
});
