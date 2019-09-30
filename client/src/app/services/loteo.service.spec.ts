import { TestBed } from '@angular/core/testing';

import { LoteoService } from './loteo.service';

describe('LoteoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoteoService = TestBed.get(LoteoService);
    expect(service).toBeTruthy();
  });
});
