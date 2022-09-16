import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PostListByUserComponent } from './post-list-by-user/post-list-by-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { PostComponent } from './post/post.component'

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListByUserComponent,
    LoginUserComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
