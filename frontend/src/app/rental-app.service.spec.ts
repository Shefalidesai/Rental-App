import { TestBed } from '@angular/core/testing';

import { RentalAppService } from './rental-app.service';

describe('RentalAppService', () => {
  let service: RentalAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
