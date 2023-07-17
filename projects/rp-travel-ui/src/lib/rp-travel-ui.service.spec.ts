import { TestBed } from '@angular/core/testing';

import { RPTravelUIService } from './rp-travel-ui.service';

describe('RPTravelUIService', () => {
  let service: RPTravelUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RPTravelUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
