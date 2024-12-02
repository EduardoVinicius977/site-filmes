import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit {
  @Input() appDestaque: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {

    if (this.appDestaque >= 7) {

      this.el.nativeElement.style.backgroundColor = 'lightgreen';
      this.el.nativeElement.style.color = 'green';
    } else if (this.appDestaque < 7 && this.appDestaque >= 5) {

      this.el.nativeElement.style.backgroundColor = 'lightyellow';
      this.el.nativeElement.style.color = 'orange';
    } else {

      this.el.nativeElement.style.backgroundColor = 'lightcoral';
      this.el.nativeElement.style.color = 'red';
    }
  }
}
