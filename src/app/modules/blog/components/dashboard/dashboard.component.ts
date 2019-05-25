import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { PostService } from '../../shared/services/post.service';


import { PostsModel } from '../../../adm/shared/models/posts';
import { Subscription } from 'rxjs';

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

  posts_List: PostsModel[] = [];



  /**
   * Subscribes:
   */
  getPostsSub: Subscription;

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

    this.getPostsSub.unsubscribe();

  }


  /**
   * Services:
   */
  getPosts(): void {

    this.getPostsSub = this.postService.getPosts()
      .subscribe(
        res => {
          console.log(res);
          this.posts_List = res;
        },
        error => {
          console.log(error)
        }
      );

  }

}
