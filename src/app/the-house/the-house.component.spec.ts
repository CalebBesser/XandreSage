import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHouseComponent } from './the-house.component';

describe('TheHouseComponent', () => {
  let component: TheHouseComponent;
  let fixture: ComponentFixture<TheHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheHouseComponent]
    });
    fixture = TestBed.createComponent(TheHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
