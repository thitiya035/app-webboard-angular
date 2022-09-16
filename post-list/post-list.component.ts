import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Post, PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  private subscrition?: Subscription;
  // userLogin?: User;
  postList: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}
  ngOnDestroy(): void {
    this.subscrition?.unsubscribe;
  }

  ngOnInit(): void {
    this.subscrition?.unsubscribe;
    this.subscrition = this.postService.getPosts().subscribe({
      error: (reponse) => {
        console.error(reponse);
        alert('Something went wrong! Please try again later.');
      },
      next: (posts) => {
        this.postList = posts;
      },
    });

    // this.subscrition?.unsubscribe;

    // this.route.queryParamMap.subscribe((params) => {
    //   console.log(params);
    // });
    // this.subscrition = this.router.paramMap
    //   .pipe(
    //     map((paramMap) => paramMap.get('idUser')),
    //     switchMap((id) => {
    //       return id === null ? of(null) : this.userService.getUsers(+id);
    //     })
    //   )
    //   .subscribe({
    //     next: (user) => (this.userLogin = user),
    //     error: (reposnse) => {
    //       console.error(reposnse);
    //       alert('Something went wrong! Please try again later.');
    //     },
    //   });
  }
}
