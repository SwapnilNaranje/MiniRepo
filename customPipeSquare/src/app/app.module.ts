import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './square.pipe';
import { EvenOddPipe } from './even-odd.pipe';
import { VotePipe } from './vote.pipe';
import { StringValuePipe } from './string-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    EvenOddPipe,
    VotePipe,
    StringValuePipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
