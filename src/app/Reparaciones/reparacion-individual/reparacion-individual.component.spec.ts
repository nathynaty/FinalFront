import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacionIndividualComponent } from './reparacion-individual.component';

describe('ReparacionIndividualComponent', () => {
  let component: ReparacionIndividualComponent;
  let fixture: ComponentFixture<ReparacionIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparacionIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparacionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
