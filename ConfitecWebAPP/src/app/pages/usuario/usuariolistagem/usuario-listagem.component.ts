import { UsuarioService } from './../../../services/usuario/usuarioservice';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  public usuarios: Usuario[] = [];
  public paginaAtual = 1;
  public formularioConsulta: FormGroup;
  public escolaridades: any[] = [
    { key: 0, value: "INFANTIL" },
    { key: 1, value: "FUNDAMENTAL" },
    { key: 2, value: "MÉDIO" },
    { key: 3, value: "SUPERIOR" }
  ];


  constructor(
    protected route: Router,
    protected service: UsuarioService,
    protected formBuilder: FormBuilder,
  ) {
    this.carregaFormulario();
    this.buscarRegistros();
   }

  ngOnInit(): void {  }

  pageChange(event) {
    this.paginaAtual = event;
  }
  
  buscarRegistros(query:string=""){
    let queryCompleta = "?PaginacaoInicio=1&PaginacaoQuantidade=200" + query;
    this.service.getPaged(queryCompleta).subscribe(
      (data) => {
        this.usuarios = data.retorno.value
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

  carregaFormulario() {
    this.formularioConsulta = this.formBuilder.group({
      id: [],
      nome: [],
      sobrenome: [],
      dataNascimento: [],
      escolaridade: []
    })
  }

  submitForm() {
    console.log(this.formularioConsulta);
    let query: string = "";

    let id: number = this.formularioConsulta.get('id').value;
    let nome: string = this.formularioConsulta.get('nome').value;
    let sobrenome: string = this.formularioConsulta.get('sobrenome').value;
    let dataNascimento: Date = this.formularioConsulta.get('dataNascimento').value;
    let escolaridade: number = this.formularioConsulta.get('escolaridade').value;

    if (id > 0)
      query += `&Id=${id}`;
    if (nome && nome != "")
      query += `&Nome=${nome}`;
    if (sobrenome && sobrenome != "")
      query += `&Sobrenome=${sobrenome}`;
    if (dataNascimento)
      query += `&DataNascimento=${dataNascimento}`;
    if (escolaridade >= 0)
      query += `&Escolaridade=${escolaridade}`;

      this.buscarRegistros(query);
  }
}
