import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostModel } from '../../../../../../models/post.model';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  posts_List: PostModel[] = [];

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

  }

  ngOnInit() {
  }

  goToUrl(url): void {
    this.route.navigate([url]);
  }

}
