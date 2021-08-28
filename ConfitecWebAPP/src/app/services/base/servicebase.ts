import { Resposta } from './../../models/api/resposta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigApiService } from '../configapi/configapi.service';

export class ServiceBase<T> {

    //protected config: ConfigApiService;
    private urlBase: string = "https://localhost:5001/api/";

    constructor(protected controller:string, protected client: HttpClient) {
        //this.config = new ConfigApiService();
    }

    public get(id:number) : Observable<Resposta<T>> {
        //return this.client.get<Resposta<T>>(`${this.config.configuracoes().urlApi}${this.controller}/${id}`);
        return this.client.get<Resposta<T>>(`${this.urlBase}${this.controller}/${id}`);
    }

    public getPaged(query:string) : Observable<Resposta<{[key:number]:T[]}>> {
        return this.client.get<any>(`${this.urlBase}${this.controller}Paged${query}`);
    }

    public post(object:T) : Observable<Resposta<T>> {
        return this.client.post<Resposta<T>>(`${this.urlBase}${this.controller}`,object);
    }

    public put(object:T) : Observable<Resposta<T>> {
        return this.client.put<Resposta<T>>(`${this.urlBase}${this.controller}`, object);
    }

    public delete(id:number) : Observable<Resposta<boolean>> {
        return this.client.delete<Resposta<boolean>>(`${this.urlBase}${this.controller}/${id}`);
    }
}