import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Route, NavigationEnd } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../shared/services/auth.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { UserProfileService } from '../../shared/services/user-profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  menuList = [
    {icon: 'home', text: 'Dashboard', link: '/adm'},
    {icon: 'account_circle', text: 'Perfil', link: '/adm/profile'},
    {icon: 'note', text: 'Postagens', link: '/adm/posts'},
    {icon: 'note', text: 'Postagem', link: '/adm/post'},
    {icon: 'group', text: 'Membros', link: '/adm/members'},
    {icon: 'settings', text: 'Configurações', link: '/adm/settings'},
  ];

  navTitle: string = '';

  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private userProfile: UserProfileService,
    public dialog: MatDialog
  ) {

    this.subscription = this.router.events.subscribe((val) => {
      this.setNavTitle();
    });
  }

  ngOnInit() { }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

  getRouter(link): boolean {

    if (this.router.url == link) {
      return true;
    }else {
      return false;
    }

  }

  logout(): void {

    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Deseja Sair ?', showBtnNo: true, showBtnYes: true}
    });

    dialogRef.afterClosed().subscribe(result => {


      if (result == true) {

        this.authService.removeToken();

      }
    });

  }

  setNavTitle(): void {

    for (let i = 0; i < this.menuList.length; i++) {

      if (this.router.url == this.menuList[i].link) {
        this.navTitle = this.menuList[i].text
      }

    }

  }

}
