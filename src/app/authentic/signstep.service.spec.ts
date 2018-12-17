import { TestBed, inject } from '@angular/core/testing';

import { SignstepService } from './signstep.service';

describe('SignstepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignstepService]
    });
  });

  it('should be created', inject([SignstepService], (service: SignstepService) => {
    expect(service).toBeTruthy();
  }));
});
