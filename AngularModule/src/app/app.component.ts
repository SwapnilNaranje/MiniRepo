import { Component, OnInit} from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularModule';

  users=new Array<User>();

  ngOnInit(): void {
    let u1:User={uId:1, uName:'Swapnil', password:'swap123', email:'swap123@gmail.com'}
    let u2:User={uId:2, uName:"Samyak", password:"sam@123", email:"sam123@gmail.com"}
    let u3:User={uId:3, uName:"Anuj", password:"anu@123", email:"anu123@gmail.com"}
    this.users.push(u1);   
    this.users.push(u2);   
    this.users.push(u3);   
    console.log(this.users)
  }
  getUserDetails(u:User)
  {
    this.users.push(u);
  }
  removeUser(u:User)
  {
    let index:number=this.users.indexOf(u);
    this.users.splice(index,1);
  }
}
