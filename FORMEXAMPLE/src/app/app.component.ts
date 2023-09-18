import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  saveData(val:any)
  {
    console.log("USER NAME= "+val.uname);
    console.log("password= "+val.pass)
  }
  data(v:any)
  {
    console.log("USER NAME= "+v.uname);
    console.log("password= "+v.pass)
  }

 
 login=new FormGroup({
  uname:new FormControl(),
  pass:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    pin:new FormControl(),
  })
 })

 saved()
  {
    console.log("User Name= "+this.login.value.uname);
   console.log("password= "+this.login.value.pass);
   console.log("city Name= "+this.login.value.address?.city);
   console.log("pin code= "+this.login.value.address?.pin)
  }
}
