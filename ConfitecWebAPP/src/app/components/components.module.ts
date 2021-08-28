import { TituloComponent } from './titulo/titulo.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    TituloComponent
  ],
  exports: [
    HeaderComponent,
    TituloComponent
  ],
  imports: [CommonModule, RouterModule]
})
export class ComponentesModule { }