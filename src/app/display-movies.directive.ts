import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayMovies]'
})
export class DisplayMoviesDirective {

	@Input() set appDisplayMovies(condition: boolean){
		if(condition){
			this.vwRef.createEmbeddedView(this.tpltRef);
		}else{
			this.vwRef.clear();
		}
	}
	constructor(private tpltRef: TemplateRef<any>, private vwRef:ViewContainerRef) { }

}
