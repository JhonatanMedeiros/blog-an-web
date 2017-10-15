import { Component, OnInit } from '@angular/core';

import { PostsModel } from '../../../../shared/models/posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  posts_List: PostsModel[] = [];

  activities = [
    {
      name: 'Photos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi eaque eos excepturi hic ipsa laboriosam laborum minima nostrum, quae, reprehenderit similique unde veniam? Dignissimos expedita praesentium quibusdam saepe velit.',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi eaque eos excepturi hic ipsa laboriosam laborum minima nostrum, quae, reprehenderit similique unde veniam? Dignissimos expedita praesentium quibusdam saepe velit.',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi eaque eos excepturi hic ipsa laboriosam laborum minima nostrum, quae, reprehenderit similique unde veniam? Dignissimos expedita praesentium quibusdam saepe velit.',
      updated: new Date('1/28/16'),
    }
  ];

  constructor(private route: Router) {

    let obj1 = {
        id: 1,
        url: '/blog',
        title: 'Posttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt 1',
        imgUrl: 'http://material.angular.io/assets/img/examples/shiba2.jpg',
        description: 'dsadsa',
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

  goToUrl(url): void {
    this.route.navigate([url]);
  }

}
