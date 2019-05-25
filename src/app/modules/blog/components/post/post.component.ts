import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { PostsModel } from '../../../adm/shared/models/posts';
import { PostService } from '../../shared/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  /**
   * VARIABLES
   *
   */

  post: PostsModel = new PostsModel();

  postID: number;





  /**
   * Subscribe:
   */
  routerParamsSub: Subscription;
  getPostSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }


  ngOnInit() {

    this.routerParamsSub = this.route.params
      .subscribe(
      params => {

        this.postID = params['urlID'];

        if (!this.postID) {
          this.router.navigate(['/error?type=404']);
          return
        }

        this.getPost(this.postID);

      });

  }

  /**
   * OnDestroy
   */
  ngOnDestroy() {
    this.routerParamsSub.unsubscribe();
    this.getPostSub.unsubscribe();
  }


  /**
   * Services:
   */

  getPost(urlID) {
    this.getPostSub = this.postService.getPost(urlID)
      .subscribe(
        res => {
          console.log(res)
        },
        error => {
          console.log(error)
        }
      );
  }


  /**
   * Functions
   */






}
