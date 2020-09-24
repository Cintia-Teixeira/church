import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }
  validationsForm: FormGroup;

  validationMessages = {
    name: [
      { type: 'required', message: 'Insira seu nome.' }
    ],
    lastname: [
      { type: 'required', message: 'Insira seu sobrenome.' }
    ],
    email: [
      { type: 'required', message: 'Insira seu e-mail.' },
      { type: 'pattern', message: 'Por favor, insira um e-mail válido.' }
    ],
    subject: [
      { type: 'required', message: 'Insira um assunto.' }
    ],
    message: [
      { type: 'required', message: 'Escreva uma mensagem.' },
      { type: 'maxlength', message: 'A mensagem não pode ter mais de 500 caracteres.' },
    ],
  };

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(500)
      ]))
    });
  }

  onSubmit(values) {
    console.log(values);
    this.router.navigate(['/quem-somos']);
  }

}
