import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {
  @Input() bottomColour?:string;
  @Input() fontWeight?:string;

  @HostListener('mouseenter') onMouseEnter(){
    this.mouseEnterEffect(this.bottomColour,this.fontWeight);
  }
  @HostListener('mouseleave') onMouseLeave(){
      this.mouseLeaveEffect(this.bottomColour,this.fontWeight);
  }

  private mouseEnterEffect(colour,fontWeigth){
    if(colour){
      this.elm.nativeElement.style.borderBottom  = '1px solid '+ colour;
    }
    if(fontWeigth){
      this.elm.nativeElement.style.fontWeight   = fontWeigth;
    }
}
  private mouseLeaveEffect(colour,fontWeigth){
    if(colour){
      this.elm.nativeElement.style.borderBottom  = '';
    }
    if(fontWeigth){
      this.elm.nativeElement.style.fontWeight   = 'normal';
    }
  }

  constructor(private elm: ElementRef) { }

}
