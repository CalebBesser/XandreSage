import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydeandSeekComponent } from './hydeand-seek.component';

describe('HydeandSeekComponent', () => {
  let component: HydeandSeekComponent;
  let fixture: ComponentFixture<HydeandSeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HydeandSeekComponent]
    });
    fixture = TestBed.createComponent(HydeandSeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
