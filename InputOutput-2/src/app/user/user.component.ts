import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

 @Input() className!:string;

 @Output() sendMsg=new EventEmitter();

 onclick()
 {
    this.sendMsg.emit("Hellow Student..!")
 }
 
}
