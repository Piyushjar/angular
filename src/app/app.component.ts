import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular  ';
  name="Piyush";
  show=true;
  color="refd";
  getName(name:any){
    console.log(name);
  }
  setValue(val:string){
    this.title=val;
  }
  users=["konan","hidan","itachi","tobi","kakuzu","sasori","deidara"];
  userDetails=[
    {name:"konan" , phone:"4822398" ,email:"konan.papergirl@yahoo.com",socials:["insta","github"]},
    {name:"hidan", phone:"4828998" ,email:"hidan.money@yahoo.com",socials:["insta","github"]},
    {name:"itachi" , phone:"4823298" ,email:"itachi.uchiha@yahoo.com",socials:["insta","github"]},
    {name:"tobi" , phone:"4828798" ,email:"fake.madara@gmail.com",socials:["insta","github"]},
    {name:"kakuzu" , phone:"4821598" ,email:"kakuzu.hairboy@yahoo.com",socials:["insta","github"]},
    {name:"sasori", phone:"4829898" ,email:"sauce.dummy@yahoo.com",socials:["insta","github"]},
    {name:"deidara" , phone:"4812298" ,email:"artist.laden@yahoo.com",socials:["insta","github"]},
  ]

}
//interpolation 
//component
//property binding
