import { Escolaridade } from '../valueobjects/escolaridade';
import { ModelBase } from './../base/modelbase';

export class Usuario extends ModelBase {
    
    public nome: string;
    public sobrenome: string;
    public email: string;
    public dataNascimento: Date;
    public escolaridade: Escolaridade;
}