import { Component, OnInit } from '@angular/core';

import { PostsModel } from '../../../../shared/models/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts_List: PostsModel[] = [];

  constructor() {

    let obj1 = {
      id: 1,
      url: '/blog',
      title: 'Post 1',
      imgUrl: 'http://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?',
      author: 'Nome',
      authorId: 1
    };
    let obj2 = {
      id: 2,
      url: '/blog',
      title: 'Post 2',
      imgUrl: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?',
      author: 'Nome',
      authorId: 2
    };

    this.posts_List.push(obj1);
    this.posts_List.push(obj2);

  }

  ngOnInit() {
  }

}
