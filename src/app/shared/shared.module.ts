import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponentDirective } from './directives/sub-component.directive';



@NgModule({
  declarations: [
    SubComponentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubComponentDirective
  ]
})
export class SharedModule { }
