import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  typeError: number;
  typeMsg: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe( params => {

      this.typeError = Number(params['type']);



      switch (this.typeError) {
        case 0: {

          this.typeMsg = 'Offline';

          break;
        }
        case 403: {

          this.typeMsg = 'Você não está autorizado!';

          break;
        }
        default: {

          this.typeError = 404;

          this.typeMsg = 'Página não encontrada!'
        }
      }

    });


  }

}
