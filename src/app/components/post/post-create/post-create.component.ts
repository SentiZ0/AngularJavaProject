import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { categoryService } from 'src/app/services/category-service.service';
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

  selectedCategoryId: number = 0;

  categories?: Category[];

  userRole: number = 0;

  constructor(private postService : postService, private categoryService: categoryService, private router : Router)
  {
    let userId = localStorage.getItem('LoggedUserId');

    if (userId) {
      this.authorId = parseInt(userId);
    }

    let userRoleAsString = localStorage.getItem('loggedUserRole');

    if (userRoleAsString) {
      this.userRole = parseInt(userRoleAsString);
    }

    if(this.userRole == null || this.userRole < 3)
    {
      this.router.navigate(['/no-auth']);
    }
  }

  ngOnInit()
  {
    this.categories = [
      new Category(1, 'Kategoria 1'),
      new Category(2, 'Kategoria 2'),
      new Category(3, 'Kategoria 3'),
    ];
  }

  createPost()
  {
    let id = 0;

    let post = new Post(id, this.postTitle, this.postDescription, this.creationTime, this.authorId, this.selectedCategoryId, 1);

    this.postService.createPost(post).subscribe();
  }

  getCategories()
  {
    this.categoryService.getCategories().subscribe(categories => {this.categories = categories})
  }
}
