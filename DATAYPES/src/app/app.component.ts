import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DATAYPES';
  rollno:number=101;
  marks:number=88.45;
  name:String="Swapnil";
  div:String='A';
  pass:boolean=true;
  result:any=true;

  //numbers:number[]=[7,8,5,9,1,3]

 numbers:Array<number>=[9,6,3,4,7,2]

// ngOnInit(): void {
//   for(let num of this.numbers)
//   {
//     alert(num)
//   }
// }

ngOnInit(): void {
  for(let num of this.numbers)
  {
   console.log(num)
  }
}
}
