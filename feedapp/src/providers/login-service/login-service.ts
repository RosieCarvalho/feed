import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../modelos/login';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  public perfil: string="";
  constructor(public http: HttpClient, private _http: HttpClient) {

  }

  lista() {
    return this._http.get<Login[]>("http://localhost:8080/usuarios");
  }

  adicionar() {
    return this._http.get<Login[]>("http://localhost:8080/usuario/create");
  }

  login(nome,senha) {

    return this._http.get<Login[]>("http://localhost:8080/usuario/login/" + nome + "/" + senha);


  }

}
