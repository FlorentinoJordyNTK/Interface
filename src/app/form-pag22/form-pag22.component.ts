import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pag22',
  templateUrl: './form-pag22.component.html',
  styleUrls: ['./form-pag22.component.css']
})
export class FormPag22Component implements OnInit {

 
  form: FormGroup;

  constructor(
    formBuilder: FormBuilder
    ){
      this.form = formBuilder.group({
        identificador: ['', [Validators.required]],
        fechamin: ['', [Validators.required]],
        fechamax: ['', [Validators.required]],
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
