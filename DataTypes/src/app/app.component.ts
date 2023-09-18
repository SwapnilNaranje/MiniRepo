import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  int:number=101;
  name:String='swapnil';
  div:String='A';
  marks:number=123456789;
  x:any=45.54;
 pass:boolean=true;
 arraynum:number[]=[1,2,3,4,5,6,7]
strarray:string[]=["Swapnil", "Samyak", "Anuj", "Aman", "Adarsh"];

stu:Student={

  sid:101,
  sname:'Punam',
  saddr:'Pune',
  smob:987456879,
  smarks:85.66
}
}
  


