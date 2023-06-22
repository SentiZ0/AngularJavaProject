import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGetAllComponent } from './post-get-all.component';

describe('PostGetAllComponent', () => {
  let component: PostGetAllComponent;
  let fixture: ComponentFixture<PostGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGetAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
