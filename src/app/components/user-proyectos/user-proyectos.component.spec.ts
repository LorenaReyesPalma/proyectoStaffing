import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProyectosComponent } from './user-proyectos.component';

describe('UserProyectosComponent', () => {
  let component: UserProyectosComponent;
  let fixture: ComponentFixture<UserProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
