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

  constructor(private fb: FormBuilder) {

    this.createForm();

    document.querySelector('body').classList.add('body-login');
  }

  ngOnInit() {


  }

  createForm() {

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

}
