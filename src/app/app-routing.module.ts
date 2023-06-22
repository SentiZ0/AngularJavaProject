import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostGetAllComponent } from './components/post/post-get-all/post-get-all.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

const routes: Routes = [
 
  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-login', component: UserLoginComponent},

  { path: '', redirectTo: 'post-get-all', pathMatch: 'full' },

  { path: 'post-create', component: PostCreateComponent },
  { path: 'post-get-all', component:  PostGetAllComponent},

  { path: 'about-us', component: AboutUsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
