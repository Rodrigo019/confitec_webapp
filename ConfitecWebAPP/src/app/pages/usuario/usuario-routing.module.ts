import { UsuarioCadastroComponent } from './usuariocadastro/usuario-cadastro.component';
import { UsuarioListagemComponent } from './usuariolistagem/usuario-listagem.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: UsuarioListagemComponent
    },
    {
        path: 'cadastro/:id',
        component: UsuarioCadastroComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}