import { NgModule, ModuleWithProviders } from '@angular/core';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class UserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserModule,
      providers: [UserService]
    };
  }
}
