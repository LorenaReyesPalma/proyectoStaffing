import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEliminarUserOProyectoComponent } from './admin-eliminar-user-oproyecto.component';

describe('AdminEliminarUserOProyectoComponent', () => {
  let component: AdminEliminarUserOProyectoComponent;
  let fixture: ComponentFixture<AdminEliminarUserOProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEliminarUserOProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEliminarUserOProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
