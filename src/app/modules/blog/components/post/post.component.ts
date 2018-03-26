import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { PostService } from '../../shared/services/post.service';

import { PostModel } from '../../../../models/post.model';


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

  post: PostModel = new PostModel();

  postID: number;





  /**
   * Subscribe:
   */
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }


  ngOnInit() {

    this.subscription = this.route.params
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

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  /**
   * Services:
   */

  getPost(urlID) {
    this.subscription = this.postService.getPost(urlID)
      .subscribe(
        res => {
          this.post = res;
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
