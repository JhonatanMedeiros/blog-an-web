import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  links = [
    {text: 'Inicio', link: '/'},
    {text: 'Recentes', link: '/blog/posts'},
    {text: 'Angular 2', link: '/blog/category1'},
    {text: 'Node.js', link: '/blog/category2'}
    ];

  posts_List = [];

  constructor() {

    let obj1 = {
      id: 1,
      url: '/blog',
      title: 'Posttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt 1',
      imgUrl: 'http://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?',
      author: 'Nome',
      authorId: 1
    };
    let obj2 = {
      id: 2,
      url: '/blog',
      title: 'Post 2',
      imgUrl: 'http://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto assumenda, delectus eligendi est et eum expedita fugiat fugit impedit itaque nulla odio omnis saepe sint tenetur veniam voluptatem?',
      author: 'Nome',
      authorId: 2
    };

    this.posts_List.push(obj1);
    this.posts_List.push(obj1);
    this.posts_List.push(obj2);
    this.posts_List.push(obj1);
    this.posts_List.push(obj2);
  }

  ngOnInit() {
  }

}
