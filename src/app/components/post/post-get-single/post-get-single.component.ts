import { Component } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { commentService } from 'src/app/services/comment-service.service';
import { postService } from 'src/app/services/post-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-get-single',
  templateUrl: './post-get-single.component.html',
  styleUrls: ['./post-get-single.component.css']
})
export class PostGetSingleComponent {
  post?: Post;
  comments?: Comment[];

  isEditMode: boolean = false;

  id: number = 0;
  
  ngOnInit()
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.getPost();

    this.getComments();
  }

  constructor(private postService : postService, private commentService: commentService, private route: ActivatedRoute)
  {}

  getPost()
  {
    this.postService.getPost(this.id).subscribe(post => {this.post = post})
  }

  getComments()
  {
    this.commentService.getComments(this.id).subscribe(comments => {this.comments = comments})
  }

  switchToEditMode() {
    this.isEditMode = true;
}

saveChanges() {
    this.isEditMode = false;
}

cancelEdit() {
    this.isEditMode = false;
}
}
