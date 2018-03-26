import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PostService } from '../../../../shared/services/post.service';
import { LoggingService } from '../../../../../../shared/services/local-services/logging.service';

import { PostModel } from '../../../../../../models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  posts_List: PostModel[] = [];

  subscription: Subscription;

  constructor(
    private postService: PostService,
    private log: LoggingService
  ) { }

  ngOnInit() {

    this.getPosts();

  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }


  getPosts(): void {

    this.subscription = this.postService.getPosts()
      .subscribe(
        response => {
          this.posts_List = response.posts;
        },
        error => {
          this.log.error('post_list', error)
        }
      );
  }

}
