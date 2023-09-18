import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit{

  @Input() data:any;
  @Output() toParent=new EventEmitter<string>();

  ngOnInit(): void {
    this.toParent.emit("hello cjc !");
  }

  senddata()
  {
    this.toParent.emit("data recived")
  } 
}
