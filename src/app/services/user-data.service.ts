import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  users(){
    return [
      {name:"Itachi",age:"21",email:"itachi.uchicha@gmail.com"},
      {name:"tobi",age:"28",email:"tobi.uchicha@gmail.com"},
      {name:"sasori",age:"22",email:"sasori.ofsand@gmail.com"}
    ]
  }

}
