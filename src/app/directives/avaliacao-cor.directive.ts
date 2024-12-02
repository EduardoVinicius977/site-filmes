import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAvaliacaoColor]'
})
export class AvaliacaoColorDirective implements OnInit {
  @Input() appAvaliacaoColor: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.atualizarCor();
  }

  private atualizarCor(): void {
    if (this.appAvaliacaoColor >= 7) {
      this.el.nativeElement.style.color = 'green';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
