import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VIEWCHLDDECORETOR';
  @ViewChild('heading')
  head:ElementRef;
  @ViewChild(UserComponent)
  userComp:UserComponent;

  changeHeading()
  {
    this.head.nativeElement.innerHTML="Hellow Angular Day..!"
    console.log(this.head)
    this.head.nativeElement.style.color='red'
    this.head.nativeElement.style.backgroundColor='black'
  } 

  changeChildProperty()
  {
      this.userComp.name="complete java clasess..!"
  } 

  callchildFunction()
  {
    this.userComp.callme();
  }
  
}
