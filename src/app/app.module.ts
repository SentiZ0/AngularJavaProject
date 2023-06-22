import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostGetAllComponent } from './components/post/post-get-all/post-get-all.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryCreateComponent,
    NavbarComponent,
    PostCreateComponent,
    PostGetAllComponent,
    UserCreateComponent,
    UserLoginComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
