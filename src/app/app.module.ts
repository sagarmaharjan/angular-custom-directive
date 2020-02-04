import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HighlightDirective, BetterHighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
