import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetAllComponent } from './user-get-all.component';

describe('UserGetAllComponent', () => {
  let component: UserGetAllComponent;
  let fixture: ComponentFixture<UserGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
