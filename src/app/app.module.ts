import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { httpInterceptors } from './shared/interceptors';
import { SharedModule } from './shared/shared.module';
import { DisplayExpDetailsComponent } from './dashbaord/components/display-exp-details/display-exp-details.component';

@NgModule({
  declarations: [AppComponent, DisplayExpDetailsComponent],
  imports: [
    BrowserModule,
    CoreModule,

    AppRoutingModule, // routing module ==> routing modules must be specified @ the end in the import list.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
