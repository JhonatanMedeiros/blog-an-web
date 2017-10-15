import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  links = [
    {text: 'Inicio', link: '/'},
    {text: 'News', link: '/posts'},
    {text: 'Categoria 1', link: '/category1'},
    {text: 'Categoria 2', link: '/category2'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
