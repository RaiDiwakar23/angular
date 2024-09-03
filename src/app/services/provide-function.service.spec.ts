import { TestBed } from '@angular/core/testing';

import { ProvideFunctionService } from './provide-function.service';

describe('ProvideFunctionService', () => {
  let service: ProvideFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
