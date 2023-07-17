import { TestBed } from '@angular/core/testing';

import { FlightResultsApiService } from './flight-results-api.service';

describe('FlightResultsApiService', () => {
  let service: FlightResultsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightResultsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
