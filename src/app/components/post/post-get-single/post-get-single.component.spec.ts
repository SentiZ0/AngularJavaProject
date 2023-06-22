import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGetSingleComponent } from './post-get-single.component';

describe('PostGetSingleComponent', () => {
  let component: PostGetSingleComponent;
  let fixture: ComponentFixture<PostGetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGetSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
