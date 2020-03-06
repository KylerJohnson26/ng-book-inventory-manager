import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
