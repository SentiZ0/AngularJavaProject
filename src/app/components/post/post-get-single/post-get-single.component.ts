import { Component } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { commentService } from 'src/app/services/comment-service.service';
import { postService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-get-single',
  templateUrl: './post-get-single.component.html',
  styleUrls: ['./post-get-single.component.css']
})
export class PostGetSingleComponent {
  post?: Post;
  comments?: Comment[];

  id: number = 0;

  constructor(private postService : postService, private commentService: commentService)
  {}

  getPost()
  {
    this.postService.getPost(this.id).subscribe(post => {this.post = post})
  }

  getComments()
  {
    this.commentService.getComments()
  }
}
