import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

user:User={
  uid:0,
  uname:" ",
  password:" " 
}

sendUser:User={
  uid:0,
  uname:" ",
  password:" " 
}

childmsg:string;

submit(){
this.sendUser=this.user;
}

getChildData(value:string)
{
  this.childmsg=value;
}
}
