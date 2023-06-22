import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { postService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-get-all',
  templateUrl: './post-get-all.component.html',
  styleUrls: ['./post-get-all.component.css']
})
export class PostGetAllComponent {

  posts?: Post[];

  ngOnInit()
  {
    this.getPosts();
  }

  constructor(private postService : postService)
  {}

  getPosts()
  {
    this.postService.getPosts().subscribe(posts => {this.posts = posts})
  }
}
