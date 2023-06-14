import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPieceComponent } from './master-piece.component';

describe('MasterPieceComponent', () => {
  let component: MasterPieceComponent;
  let fixture: ComponentFixture<MasterPieceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterPieceComponent]
    });
    fixture = TestBed.createComponent(MasterPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
