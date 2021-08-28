export class Resposta<T> {

    sucesso: boolean;
    status: number;
    erros: string[];
    retorno: T;
}