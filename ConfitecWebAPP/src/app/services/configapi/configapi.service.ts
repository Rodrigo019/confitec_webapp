import { ConfigApi } from './../../models/api/configapi';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class ConfigApiService {

    configuracoes(): ConfigApi {
        const config = new ConfigApi();
        console.log((window as any).config);
        config.urlApi = (window as any).config.urlApi || undefined;

        return config;
    }
}