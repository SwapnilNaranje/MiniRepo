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
    upassword:" "
  }

  submit()
  {
    console.log(this.user)
  }
}
