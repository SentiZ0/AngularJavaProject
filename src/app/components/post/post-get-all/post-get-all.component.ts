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

  paginatedPosts: Post[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number[] = [];

  ngOnInit()
  {
    this.getPosts();

    this.calculateTotalPages();
    this.updatePaginatedPosts();
  }

  constructor(private postService : postService)
  {}

  getPosts()
  {
    this.postService.getPosts().subscribe(posts => {this.posts = posts})
  }

  changeStatus(postId: number) {
    this.postService.changeStatus(postId).subscribe();
  }

  deletePost(postId: number) {
      this.postService.deletePost(postId).subscribe(data => {this.getPosts});
  }

  calculateTotalPages(): void {
    if(this.posts)
    {
      this.totalPages = [];
      const totalPosts = this.posts.length;
      const totalPages = Math.ceil(totalPosts / this.itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        this.totalPages.push(i);
      }
    }

  }

  updatePaginatedPosts(): void {
    if(this.posts)
    {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedPosts = this.posts.slice(startIndex, endIndex);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }
}
