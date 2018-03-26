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

  pagination: {page: number, pages: number, total: number, limit: number} = {
    page: 0,
    pages: 0,
    total: 0,
    limit: 0
  };

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


  getPosts(opts?: {page?: number, limit?: number}): void {

    this.subscription = this.postService.getPosts(opts)
      .subscribe(
        response => {

          this.posts_List = response.posts;

          this.pagination.limit = response.limit;
          this.pagination.page = response.page;
          this.pagination.total = response.total;
          this.pagination.pages = response.pages;

        },
        error => {
          this.log.error('post_list', error)
        }
      );
  }


  changePage(event): void {

    let pageNumber: number = event.pageIndex + 1;

    this.getPosts({page: pageNumber, limit: event.pageSize});

  }

}
