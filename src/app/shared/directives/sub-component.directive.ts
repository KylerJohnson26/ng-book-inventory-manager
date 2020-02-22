import { Directive, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[sub-component]'
})
export class SubComponentDirective {

  constructor() { }

  @HostBinding('class.subcomponent')
  get subcomponent(): boolean {
    return true;
  }

}
