import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { IntegrationListComponent } from './integration-list/integration-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IntegrationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ClrIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
