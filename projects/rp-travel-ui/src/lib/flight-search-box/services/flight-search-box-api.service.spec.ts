import { TestBed } from '@angular/core/testing';

import { FlightSearchBoxApiService } from './flight-search-box-api.service';

describe('FlightSearchBoxApiService', () => {
  let service: FlightSearchBoxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSearchBoxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
