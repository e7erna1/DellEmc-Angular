import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule} from '@clr/angular';
import {FirstBlockComponent} from './first-block/first-block.component';
import {SecondBlockComponent} from './second-block/second-block.component';
import {ThirdBlockComponent} from './third-block/third-block.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FirstBlockComponent, SecondBlockComponent, ThirdBlockComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
