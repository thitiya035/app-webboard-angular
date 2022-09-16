import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { PostListByUserComponent } from './post-list-by-user/post-list-by-user.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginUserComponent,
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },
  // {
  //   path: 'post-list/:userId',
  //   component: PostListComponent,
  // },
  {
    path: 'my-post',
    component: PostListByUserComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
