import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstudianteComponent } from './actualizar-estudiante.component';

describe('ActualizarEstudianteComponent', () => {
  let component: ActualizarEstudianteComponent;
  let fixture: ComponentFixture<ActualizarEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarEstudianteComponent]
    });
    fixture = TestBed.createComponent(ActualizarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
