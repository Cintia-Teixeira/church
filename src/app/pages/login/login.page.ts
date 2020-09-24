import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }
  validationsForm: FormGroup;

  validationMessages = {
    email: [
      { type: 'required', message: 'Insira seu e-mail.' },
      { type: 'pattern', message: 'Por favor, insira um e-mail válido.' }
    ],
    password: [
      { type: 'required', message: 'Insira sua senha.' }
    ]
  };

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(values) {
    console.log(values);
    this.router.navigate(['/area-do-membro/membresia']);
  }


}
