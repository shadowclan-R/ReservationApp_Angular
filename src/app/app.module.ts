import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { InstrumentsModule } from './modules/instruments/instruments.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    InstrumentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
