import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPropietariosComponent } from './editar-propietarios.component';

describe('EditarPropietariosComponent', () => {
  let component: EditarPropietariosComponent;
  let fixture: ComponentFixture<EditarPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPropietariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
