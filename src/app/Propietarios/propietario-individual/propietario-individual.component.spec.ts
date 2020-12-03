import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioIndividualComponent } from './propietario-individual.component';

describe('PropietarioIndividualComponent', () => {
  let component: PropietarioIndividualComponent;
  let fixture: ComponentFixture<PropietarioIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
