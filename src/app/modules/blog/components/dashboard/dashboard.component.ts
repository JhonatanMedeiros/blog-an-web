import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { PostService } from '../../shared/services/post.service';

import { PostModel } from '../../../../models/post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  links = [
    {text: 'Inicio', link: '/'},
    {text: 'Recentes', link: '/blog/posts'},
    {text: 'Angular 2', link: '/blog/category1'},
    {text: 'Node.js', link: '/blog/category2'}
    ];

  posts_List: PostModel[] = [];



  /**
   * Subscribes:
   */
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {

  }

  ngOnInit() {

    this.getPosts();

  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }


  /**
   * Services:
   */
  getPosts(): void {

    this.subscription = this.postService.getPosts()
      .subscribe(
        res => {
          this.posts_List = res.posts;
        },
        error => {
          console.log(error)
        }
      );

  }

}
