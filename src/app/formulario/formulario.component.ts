import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form;

  constructor(
    formBuilder: FormBuilder
    ){
      this.form = formBuilder.group({
        identificador: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
        apellidoP: ['', [Validators.required]],
        apellidoM: ['', [Validators.required]],
        pdwUsuario: ['', [Validators.required]],
        correo: ['', [Validators.required]]
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
