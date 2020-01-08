import { TestBed } from '@angular/core/testing';

import { FetchFlagsService } from './fetch-flags.service';

describe('FetchFlagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchFlagsService = TestBed.get(FetchFlagsService);
    expect(service).toBeTruthy();
  });
});
