import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[postHost]'
})
export class PostHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
