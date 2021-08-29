import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from './../../components/components.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListagemComponent } from './usuariolistagem/usuario-listagem.component';
import { NgModule } from "@angular/core";
import { UsuarioCadastroComponent } from './usuariocadastro/usuario-cadastro.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotifierModule } from 'angular-notifier';


@NgModule({
    declarations:[ 
        UsuarioListagemComponent,
        UsuarioCadastroComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        ComponentesModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NotifierModule
    ]
})
export class UsuarioModule {}