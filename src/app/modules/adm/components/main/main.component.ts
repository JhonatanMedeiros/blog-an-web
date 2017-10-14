import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';

import { AuthService } from '../../shared/services/auth.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menuList = [
    {icon: 'home', text: 'Dashboard', link: '/adm'},
    {icon: 'account_circle', text: 'Perfil', link: '/adm/profile'},
    {icon: 'note', text: 'Postagens', link: '/adm/post'},
    {icon: 'group', text: 'Membros', link: '/adm/members'},
    {icon: 'settings', text: 'Configurações', link: '/adm/settings'},
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  getRouter(menu): boolean {

    if (this.router.url == menu.link) {
      return true;
    }else {
      return false;
    }

  }

  logout(): void {

    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {


      if (result == true) {

        this.authService.removeToken();

      }
    });

  }

}
