import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEstudianteComponent } from './login-estudiante.component';

describe('LoginEstudianteComponent', () => {
  let component: LoginEstudianteComponent;
  let fixture: ComponentFixture<LoginEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEstudianteComponent]
    });
    fixture = TestBed.createComponent(LoginEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
