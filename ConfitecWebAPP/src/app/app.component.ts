import { UsuarioService } from './services/usuario/usuarioservice';
import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConfitecWebAPP';

  constructor(protected usuarioService: UsuarioService) {
    this.usuarioService.get(1)
  }
}
