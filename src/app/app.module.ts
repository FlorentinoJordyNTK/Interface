import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

const router:Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
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
