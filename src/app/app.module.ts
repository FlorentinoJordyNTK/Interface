import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormPag22Component } from './form-pag22/form-pag22.component';

const router:Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'formulario22',
    component: FormPag22Component
  },

];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormPag22Component
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
