import { TestBed } from '@angular/core/testing';

import { postService } from './post-service.service';

describe('PostServiceService', () => {
  let service: postService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(postService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
