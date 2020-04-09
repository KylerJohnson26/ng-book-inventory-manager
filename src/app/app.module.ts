import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    BooksModule,
    AngularMaterialModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
