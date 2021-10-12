import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    formBuilder: FormBuilder
    ){
      this.loginForm = formBuilder.group({
        usuario: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        contraseña: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      });
  }

  submit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }

    else{
      alert("Faltan campos por llenar")
    }
  }

  ngOnInit(): void {
  }

}
