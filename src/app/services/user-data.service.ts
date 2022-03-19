import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  // fetched data
  quotesApi(){
    return this.http.get('https://type.fit/api/quotes');
  }

  // normal data
  users(){
    return [
      {name:"Itachi",age:"21",email:"itachi.uchicha@gmail.com"},
      {name:"tobi",age:"28",email:"tobi.uchicha@gmail.com"},
      {name:"sasori",age:"22",email:"sasori.ofsand@gmail.com"}
    ]
  }

}
