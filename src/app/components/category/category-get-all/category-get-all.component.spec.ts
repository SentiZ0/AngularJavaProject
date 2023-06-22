import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGetAllComponent } from './category-get-all.component';

describe('CategoryGetAllComponent', () => {
  let component: CategoryGetAllComponent;
  let fixture: ComponentFixture<CategoryGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
