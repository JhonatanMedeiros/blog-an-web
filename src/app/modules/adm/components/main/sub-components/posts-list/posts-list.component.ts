import { Component, OnInit } from '@angular/core';

import { PostsModel } from '../../../../shared/models/posts';
import { PostService } from '../../../../shared/services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts_List: PostsModel[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {

    this.getPosts();

  }


  getPosts(): void {

    this.postService.getPosts()
      .subscribe(
        response => {
          this.posts_List = response;
          console.log(this.posts_List)

        },
        error => {
          console.log(error);
        }
      );
  }

}
