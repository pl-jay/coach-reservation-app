import { TestBed } from '@angular/core/testing';

import { AuthenticatioinService } from './authenticatioin.service';

describe('AuthenticatioinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticatioinService = TestBed.get(AuthenticatioinService);
    expect(service).toBeTruthy();
  });
});
