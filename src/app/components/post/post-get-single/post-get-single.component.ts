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

  commentContent : string = ""

  isEditMode: boolean = false;

  userRole: number = 0;

  userId: number = 0;

  id: number = 0;

  paginatedPosts: Comment[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number[] = [];

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    let userIdAsString = localStorage.getItem('loggedUserId');

    let userRoleAsString = localStorage.getItem('loggedUserRole');

    if (userIdAsString) {
      this.userId = parseInt(userIdAsString);
    }

    if (userRoleAsString) {
      this.userRole = parseInt(userRoleAsString);
    }

    this.getComments();

    this.calculateTotalPages();
    this.updatePaginatedPosts();
  }

  constructor(private postService: postService, private commentService: commentService, private route: ActivatedRoute) { }

  getPost() {
    this.postService.getPost(this.id).subscribe(post => { this.post = post })
  }

  getComments() {
    this.commentService.getComments(this.id).subscribe(comments => { this.comments = comments })
  }

  updatePost() {
    if (this.post) {
      this.postService.updatePost(this.post.id, this.post).subscribe();
    }
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

  createComment(commentContent: string)
  {
    if(this.post)
    {
      let comment = new Comment(0, this.commentContent, new Date(), this.userId, this.post?.id);
      this.commentService.createComment(comment).subscribe(data => {this.getComments()});
    }
  }

  calculateTotalPages(): void {
    if (this.comments) {
      this.totalPages = [];
      const totalPosts = this.comments.length;
      const totalPages = Math.ceil(totalPosts / this.itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        this.totalPages.push(i);
      }
    }

  }

  updatePaginatedPosts(): void {
    if (this.comments) {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedPosts = this.comments.slice(startIndex, endIndex);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }
}
