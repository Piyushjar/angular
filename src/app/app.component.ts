import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name="Piyush";
  show=true;
  color="refd";
  getName(name:any){
    console.log(name);
  }
  setValue(val:string){
    this.title=val;
  }
  

}
//interpolation 
//component
//property binding
