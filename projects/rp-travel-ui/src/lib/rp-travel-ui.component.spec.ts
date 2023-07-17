import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPTravelUIComponent } from './rp-travel-ui.component';

describe('RPTravelUIComponent', () => {
  let component: RPTravelUIComponent;
  let fixture: ComponentFixture<RPTravelUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RPTravelUIComponent]
    });
    fixture = TestBed.createComponent(RPTravelUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
