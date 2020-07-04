import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAsignarProyectoComponent } from './admin-asignar-proyecto.component';

describe('AdminAsignarProyectoComponent', () => {
  let component: AdminAsignarProyectoComponent;
  let fixture: ComponentFixture<AdminAsignarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAsignarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAsignarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
