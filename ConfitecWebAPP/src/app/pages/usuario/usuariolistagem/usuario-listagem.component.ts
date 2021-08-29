import { UsuarioService } from './../../../services/usuario/usuarioservice';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  public usuarios: Usuario[] = [];
  public paginaAtual = 1;

  constructor(
    protected route: Router,
    protected service: UsuarioService
  ) {
    this.buscarRegistros();
   }

  ngOnInit(): void {  }

  pageChange(event) {
    this.paginaAtual = event;
  }
  
  buscarRegistros(){
    this.service.getPaged(`?PaginacaoInicio=1&PaginacaoQuantidade=200`).subscribe(
      (data) => {
        this.usuarios = data.retorno.value
        console.log(this.usuarios);
      },
      erro => console.log(erro)
    );
  }

  alterar(id:number) {
    this.route.navigateByUrl(`usuarios/cadastro/${id}`);
  }

  novoUsuario() {
    this.route.navigateByUrl(`usuarios/cadastro/0`);
  }
}
