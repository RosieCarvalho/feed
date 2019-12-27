import { Storage } from "@ionic/storage";

//pacote para transformar nossa classe em injetável
import { Injectable } from '@angular/core';





@Injectable()
export class Session {
  public dados ;

  constructor(public storage: Storage) {

  }
  // setando uma seção e passando o tipo de usuário
  create(nome: string,perfil:string,id:string) {
    let usuario={
      nome: nome,
      perfil: perfil,
      id : id
    }
    this.storage.set('usuario', usuario);
  }

  get(){
    return this.storage.get('usuario');
  }

  // Quando deslogar deve remova do storage
  remove() {
    this.storage.remove('usuario');
  }

  exist() {
    this.get().then(res => {
       this.dados= res;
      console.log(this.dados)
    });
    console.log("exist?")
    console.log(this.dados)
    return this.dados;
  }
}
