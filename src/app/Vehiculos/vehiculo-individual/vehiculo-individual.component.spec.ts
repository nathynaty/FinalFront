import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoIndividualComponent } from './vehiculo-individual.component';

describe('VehiculoIndividualComponent', () => {
  let component: VehiculoIndividualComponent;
  let fixture: ComponentFixture<VehiculoIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
