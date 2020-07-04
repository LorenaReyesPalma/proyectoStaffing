import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincrearproyectoComponent } from './admincrearproyecto.component';

describe('AdmincrearproyectoComponent', () => {
  let component: AdmincrearproyectoComponent;
  let fixture: ComponentFixture<AdmincrearproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincrearproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincrearproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
