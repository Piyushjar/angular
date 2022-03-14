import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  data=20;
  show=true;
  color="green";
  getName(name:any){
    console.log(name);
  }
  setValue(){
    this.color=="blue" ? this.color="green": this.color="blue"
 }
  updateData(){
    this.data=Math.floor(Math.random()*100)
  }

}
//interpolation 
//component
//property binding
