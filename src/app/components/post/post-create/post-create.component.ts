import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { postService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  posts?: Post[];

  postId: number = 0;
  postTitle: string = "";
  postDescription: string = "";
  creationTime = new Date();
  authorId: number = 0;
  categoryId: number = 0;
  status: number = 0;

  constructor(private postService : postService)
  {
    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      this.authorId = parseInt(userId);
    }
  }

  createPost()
  {
    let id = 0;

    let post = new Post(id, this.postTitle, this.postDescription, this.creationTime, this.authorId, this.categoryId, this.status);

    this.postService.createPost(post).subscribe();
  }
}
