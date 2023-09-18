import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomDirectivesDirective } from './custom-directives.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesDirective,
   
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
