import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrearUserComponent } from './admin-crear-user.component';

describe('AdminCrearUserComponent', () => {
  let component: AdminCrearUserComponent;
  let fixture: ComponentFixture<AdminCrearUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCrearUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCrearUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
