import { Resposta } from './../../../models/api/resposta';
import { UsuarioService } from './../../../services/usuario/usuarioservice';
import { Usuario } from './../../../models/usuario/usuario';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public id: number;
  protected model: Usuario;
  public formulario: FormGroup;

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected service: UsuarioService,
    protected formBuilder: FormBuilder,
  ) { 
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    if (this.id != 0) {
      this.service.get(this.id).subscribe(
        (data: Resposta<Usuario>) => {
          this.model = data.retorno;
          this.carregaFormulario();
        },
        (erro: Resposta<Usuario>) => {
          console.log(erro);
        }
      );
    } else {
      this.carregaFormulario();
    }
  }

  private carregaFormulario(){
    this.formulario = this.formBuilder.group({
      teste: [],
      nome: [this.model?.nome ?? ''],
      sobrenome: [this.model?.sobrenome ?? ''],
      email: [this.model?.email ?? ''],
      dataNascimento: [this.model?.dataNascimento ?? ''],
      escolaridade: [this.model?.escolaridade ?? '']
    });
  }

  submitForm() {
    let usuario: Usuario = new Usuario();
    
    usuario.nome = this.formulario.get('nome').value;
    usuario.sobrenome = this.formulario.get('sobrenome').value;
    usuario.email = this.formulario.get('email').value;
    usuario.dataNascimento = this.formulario.get('dataNascimento').value;
    usuario.escolaridade = this.formulario.get('escolaridade').value;

    if (this.id > 0) {
      usuario.id = this.id;
      this.service.put(usuario).subscribe(
        (data: Resposta<Usuario>) => {
          console.log(data);
          this.router.navigateByUrl('/usuarios')
        },
        (erro) => 
          {console.log(erro);       
        }
      );
    } else {
      this.service.post(usuario).subscribe(
        (data: Resposta<Usuario>) => {
          console.log(data);
          this.router.navigateByUrl('/usuarios');
        },
        (erro) => {
          console.log(erro);         
        } 
      );
    }
  }

  excluir() {
    this.service.delete(this.id).subscribe(
      (data: Resposta<boolean>) => {
        console.log(data);
        this.router.navigateByUrl('/usuarios');
      },
      (erro: Resposta<boolean>) => console.log(erro)
    );
  }
}