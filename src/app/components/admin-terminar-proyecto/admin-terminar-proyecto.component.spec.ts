import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTerminarProyectoComponent } from './admin-terminar-proyecto.component';

describe('AdminTerminarProyectoComponent', () => {
  let component: AdminTerminarProyectoComponent;
  let fixture: ComponentFixture<AdminTerminarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTerminarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTerminarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
