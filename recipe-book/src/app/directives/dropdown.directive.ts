import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) onClick(event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;

    // Other way
    // if (this.isOpen) this.renderer.addClass(this.elRef.nativeElement, 'open');
    // else this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
