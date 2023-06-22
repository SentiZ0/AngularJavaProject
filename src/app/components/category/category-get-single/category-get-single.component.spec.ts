import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGetSingleComponent } from './category-get-single.component';

describe('CategoryGetSingleComponent', () => {
  let component: CategoryGetSingleComponent;
  let fixture: ComponentFixture<CategoryGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
