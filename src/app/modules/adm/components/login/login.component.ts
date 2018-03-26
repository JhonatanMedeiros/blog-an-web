import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../shared/services/auth.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

import { UserModal } from '../../../../models/user.model';



const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;

  formLost: FormGroup;

  isLoginForm: boolean = false;

  user: UserModal = new UserModal();

  inProgress: boolean = false;

  subscription: Subscription;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog) {

    if (this.authService.isLogin()) {
      this.router.navigate(['/adm']);
    }

    this.createFormLogin();

    this.createFormLost();

    document.querySelector('body').classList.add('body-login');
  }

  ngOnInit() {


  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }



  /**
   * Services
   */

  singUp(): void {

    this.inProgress = true;

    this.subscription = this.authService.login(this.user)
      .subscribe(
        response => {

          this.authService.setToken(response);
          this.inProgress = false;

          this.router.navigate(['/adm']);
        },
        error => {

          let msgError = JSON.parse(error._body);

          this.modalOpen(msgError.error);
          this.inProgress = false;
        }
      );


  }



  /**
   * Functions
   */

  createFormLogin() {

    this.formLogin = this.fb.group({
      email: ['' ,
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15)
        ]
      ],
    });

  };

  createFormLost() {

    this.formLost = this.fb.group({
      email: ['' ,
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]
      ]
    });

  };

  changeFormView() {

    if (!this.inProgress) {
      this.isLoginForm = !this.isLoginForm;
    }

  }

  recoveryPassword(): void {

    this.inProgress = true;

    setTimeout(() => {
      this.inProgress = false;
    }, 5000)

  }

  modalOpen(msg): void {

    let dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        title: 'AVISO',
        msg: msg,
        showBtnNo: true,
        showBtnYes: false,
        btnNoMsg: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

}
