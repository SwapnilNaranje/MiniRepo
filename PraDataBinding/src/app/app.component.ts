import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="Cjc pune"

  save()
  {
    alert("method call !!")
    console.log("save method")
  }

  call()
  {
    console.log(this.name)
  }
}
