import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  prouct:Observable<string>=from(['Mobile','Laptop','Tv','Keyboared'])
  studentName:Observable<string[]>=of(['Pratik','Kunal','kuber','Swapnil'])
  agentName:Observable<string>;
  name:string;
  ngOnInit(): void {

    this.prouct.subscribe((producNname:string)=>{console.log(producNname)})

    this.studentName.subscribe((students:string[])=>{console.log(students)})

    this.agentName=new Observable(

      function(observer)
      {
        observer.next('sagar');
        setInterval(
          ()=>{
            observer.next('ram');
          },3000
        );
        setInterval(
          ()=>{
            observer.next('neha');
          },6000
        );
      }
    )
    this.agentName.subscribe((name:string)=>{
        console.log(name);
        this.name=name;
      }
    )
  }
}
