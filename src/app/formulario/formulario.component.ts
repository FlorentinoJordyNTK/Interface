import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  constructor(
    formBuilder: FormBuilder
    ){
      this.form = formBuilder.group({
        identificador: ['', [Validators.required]],
        nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        apellidoP: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        apellidoM: ['', [Validators.required]],
        pdwUsuario: ['', [Validators.required]],
        correo: ['', [Validators.required, Validators.email]]
      });
  }

  submit(){
    if(this.form.valid){
      console.log(this.form.value)
    }

    else{
      alert("Faltan campos por llenar")
    }
  }


  ngOnInit(): void {
  }

}
