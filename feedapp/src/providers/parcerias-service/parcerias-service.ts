import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parceria } from '../../modelos/parcerias';

/*
  Generated class for the ParceriasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParceriasServiceProvider {

  constructor(private _http: HttpClient) {
    console.log('Hello ParceriasServiceProvider Provider');
  }

  lista() {
    return this._http.get<Parceria[]>("http://localhost:8080/parceiros");
  }

  adicionar() {

  }

  editar() {

  }

}
