import { ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from './../../components/components.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListagemComponent } from './usuariolistagem/usuario-listagem.component';
import { NgModule } from "@angular/core";
import { UsuarioCadastroComponent } from './usuariocadastro/usuario-cadastro.component';


@NgModule({
    declarations:[ 
        UsuarioListagemComponent,
        UsuarioCadastroComponent
    ],
    exports: [],
    imports: [
        UsuarioRoutingModule,
        ComponentesModule,
        ReactiveFormsModule
    ]
})
export class UsuarioModule {}