import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEstudianteComponent } from './nuevo-estudiante.component';

describe('NuevoEstudianteComponent', () => {
  let component: NuevoEstudianteComponent;
  let fixture: ComponentFixture<NuevoEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoEstudianteComponent]
    });
    fixture = TestBed.createComponent(NuevoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
