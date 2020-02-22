import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponentDirective } from './directives/sub-component.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubComponentDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubComponentDirective,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
