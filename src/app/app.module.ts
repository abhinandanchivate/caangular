import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule, // routing module ==> routing modules must be specified @ the end in the import list.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
