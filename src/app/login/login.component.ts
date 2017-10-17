import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'correo' : new FormControl('', Validators.required),
      'passwd' : new FormControl('', Validators.required)
    });
  }

  enviarFormulario(){
    console.log(this.miFormulario);
  }
}
