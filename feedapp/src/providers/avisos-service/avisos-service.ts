import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aviso } from '../../modelos/aviso';


@Injectable()
export class AvisosServiceProvider {

  constructor(private _http: HttpClient) {
    console.log('Hello AvisosServiceProvider Provider');
  }

  lista() {
    return this._http.get<Aviso[]>("http://localhost:8080/avisos");
  }

  adicionar() {

  }

  editar() {

  }


}
