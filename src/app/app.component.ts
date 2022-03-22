import { Component } from '@angular/core';
import { EmailValidator, FormControl,FormGroup } from '@angular/forms';
import {UserDataService} from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  // date =Date();
//   data=20;
//   show=true;
//   color="green";
//   getName(name:any){
//     console.log(name);
//   }
//   setValue(){
//     this.color=="blue" ? this.color="green": this.color="blue"
//  }
//   updateData(){
//     this.data=Math.floor(Math.random()*100)
//   }
  // data="";

  // updateData(item:string){
  //   console.warn(item)
  //   this.data=item;
  // }


  //Reactive forms
// userLogin(){
//   console.warn(this.loginForm.value)
// }
// loginForm = new FormGroup({
//   username: new FormControl('piyush'),
//   password: new FormControl(''),
// })


}


//interpolation 
//component
//property binding
