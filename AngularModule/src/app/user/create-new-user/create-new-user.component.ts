import { Component,EventEmitter,OnInit, Output} from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit{

  user:User={uId:0, uName:'', password:'', email:''}
  
  @Output() sendUser=new EventEmitter<User>();

  ngOnInit(): void {
   console.log(this.user)
  }
  saveUser()
  {
    this.sendUser.emit(Object.assign({},this.user));
    this.user={uId:null, uName:'', password:'', email:''}
  }
}
