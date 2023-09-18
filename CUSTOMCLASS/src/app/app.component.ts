import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  stu:Student={

    srollno:11,
    sname:'Swapnil',
    smob:9878549868,
    saddr:'Pune',
  }

  StuList:Array<Student>=
  [{srollno:12,
    sname:'Samyak',
    smob:9777549868,
    saddr:'Wardha',
  },
{
  srollno:13,
  sname:'Aman',
  smob:88878549868,
  saddr:'Nagpur',
},this.stu]

  ngOnInit(): void {
    
    for(let st of this.StuList)
    {
      console.log(st)
    }
  }

  arr:number[]=[41,56,88,69,70,51,76];

}
