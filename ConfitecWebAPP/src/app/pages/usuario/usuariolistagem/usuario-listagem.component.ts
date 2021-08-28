import { UsuarioService } from './../../../services/usuario/usuarioservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  constructor(
    protected service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.service.get(1).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
