import { TestBed } from '@angular/core/testing';

import { GetLoginService } from './get-login.service';

describe('GetLoginService', () => {
  let service: GetLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
