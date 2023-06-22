import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostGetAllComponent } from './components/post/post-get-all/post-get-all.component';

const routes: Routes = [
 
  { path: 'category-create', component: CategoryCreateComponent },

  { path: '', redirectTo: 'post-get-all', pathMatch: 'full' },

  { path: 'post-create', component: PostCreateComponent },
  { path: 'post-get-all', component:  PostGetAllComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
