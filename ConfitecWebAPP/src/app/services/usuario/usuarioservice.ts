import { HttpClient } from '@angular/common/http';
import { Usuario } from './../../models/usuario/usuario';
import { ServiceBase } from './../base/servicebase';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends ServiceBase<Usuario> {
    constructor(protected client: HttpClient) 
    {
        super("Usuario", client);
    }
}