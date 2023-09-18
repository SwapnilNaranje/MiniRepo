import { Component } from '@angular/core';
import { CommenService } from './share/commen.service';
import { Employee } from './employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(public cs:CommenService){}
  
  emp:Employee[];
  ngOnInit()
  {
    this.cs.getData().subscribe((e:Employee[])=>{this.emp=e;})
  }
}
