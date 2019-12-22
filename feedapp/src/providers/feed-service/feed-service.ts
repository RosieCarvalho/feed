
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Feed } from "../../modelos/feed";


@Injectable()
export class FeedServiceProvider {

  constructor(private _http: HttpClient) {

  }

  lista() {
    return this._http.get<Feed[]>("http://localhost:8080/feeds");
  }

  adicionar(){

  }

  editar(){

  }



}
