import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCambiarContrasenaComponent } from './user-cambiar-contrasena.component';

describe('UserCambiarContrasenaComponent', () => {
  let component: UserCambiarContrasenaComponent;
  let fixture: ComponentFixture<UserCambiarContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCambiarContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCambiarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
