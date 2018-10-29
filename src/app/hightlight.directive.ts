import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit{
	//Pour la methode compact
	@HostBinding('style.background-color') myBgColor: string;

	constructor( 
		private elRef: ElementRef, private renderer: Renderer2
		) { }

	ngOnInit(){
		this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow');
	}
	/* Methode longue
		@HostListener('mouseenter') MouseEnterEvent (eventData: Event){
		this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow');
		}
		@HostListener('mouseleave') MouseLeaveEvent (eventData: Event){
		this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent');
	}*/ 
	//Methode compact
	@HostListener('mouseenter') MouseEnterEvent (eventData: Event){
	this.myBgColor = 'yellow';
	}
	@HostListener('mouseleave') MouseLeaveEvent (eventData: Event){
	this.myBgColor = 'transparent';
	}
	
}
