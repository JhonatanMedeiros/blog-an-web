import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { UserModal } from '../../shared/models/user';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  formLost: FormGroup;

  isLoginForm: boolean = false;

  user: UserModal = new UserModal();

  inProgress: boolean = false;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    if (this.authService.isLogin()) {
      this.router.navigate(['/adm']);
    }

    this.createFormLogin();

    this.createFormLost();

    document.querySelector('body').classList.add('body-login');
  }

  ngOnInit() {


  }

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


  //login
  singUp(): void {

    this.inProgress = true;

    this.authService.login(this.user)
      .subscribe(
        response => {
          console.log(response);

          this.authService.setToken(response);
          this.inProgress = false;

          this.router.navigate(['/adm']);
        },
        error => {
          console.log(error);
          this.inProgress = false;
        }
      );


  }

  recoveryPassword(): void {

    this.inProgress = true;

    setTimeout(() => {
      this.inProgress = false;
    }, 5000)

  }

}
