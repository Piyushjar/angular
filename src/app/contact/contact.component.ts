import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

@Input() item=0;

@Output() updateDataEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }
  // userData:any={};
  // getData(data:NgForm){
  //   console.log(data)
  //   this.userData=data;
  // }
  // todos:any[]=[];
  // addTodo(todo:string){
  //   this.todos.push({id: this.todos.length, name:todo})
  //   console.warn(this.todos);

  // }
  // removeTodo(id:number){
  //   this.todos=this.todos.filter(todo=>todo.id != id)
  // }


}
