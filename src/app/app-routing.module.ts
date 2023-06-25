import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryGetAllComponent } from './components/category/category-get-all/category-get-all.component';
import { CategoryGetSingleComponent } from './components/category/category-get-single/category-get-single.component';
import { EmailGetAllComponent } from './components/email/email-get-all/email-get-all.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { NoPermissionsComponent } from './components/home/no-permissions/no-permissions.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostGetAllComponent } from './components/post/post-get-all/post-get-all.component';
import { PostGetSingleComponent } from './components/post/post-get-single/post-get-single.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserGetAllComponent } from './components/user/user-get-all/user-get-all.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

const routes: Routes = [

  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'post-get-single/:id', component: PostGetSingleComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: '', redirectTo: 'post-get-all', pathMatch: 'full' },
  { path: 'post-create', component: PostCreateComponent },
  { path: 'post-get-all', component: PostGetAllComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'category-get-all', component: CategoryGetAllComponent },
  { path: 'category-get-single/:id', component: CategoryGetSingleComponent },
  { path: 'email-get-all', component: EmailGetAllComponent },
  { path: 'user-get-all', component: UserGetAllComponent},
  { path: 'no-auth', component: NoPermissionsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
