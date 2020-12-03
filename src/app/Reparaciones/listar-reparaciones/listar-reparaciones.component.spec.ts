import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReparacionesComponent } from './listar-reparaciones.component';

describe('ListarReparacionesComponent', () => {
  let component: ListarReparacionesComponent;
  let fixture: ComponentFixture<ListarReparacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReparacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReparacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
