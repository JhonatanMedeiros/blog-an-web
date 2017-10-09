import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  inputEmail: string = '';
  inputPassword: string = '';

  inProgress: boolean = false;


  constructor(private fb: FormBuilder) {

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

    setTimeout(() => {
      this.inProgress = false;
    }, 5000)

  }

  recoveryPassword(): void {

    this.inProgress = true;

    setTimeout(() => {
      this.inProgress = false;
    }, 5000)

  }

}
