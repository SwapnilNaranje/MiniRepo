import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('mouseover')over()
  {
    this.ele.nativeElement.style.backgroundColor='red'
  }
  @HostListener('mouseout')out()
  {
    this.ele.nativeElement.style.backgroundColor='blue'
  }
  @HostListener('click')click()
  {
    this.ele.nativeElement.style.backgroundColor='green'
  }
}
