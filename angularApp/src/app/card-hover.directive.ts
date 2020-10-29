import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @Input () firstIndex?: string;

  @HostListener('mouseenter') onMouseEnter(btn){
    if (this.firstIndex){
      this.elm.nativeElement.style.backgroundColor  = 'red';
    }
  }
  @HostListener('mouseleave') onMouseLeave(btn){
    if(this.firstIndex){
      this.elm.nativeElement.style.backgroundColor  = '';
    }

  }

  constructor(private elm: ElementRef) { }

}
