import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { ListWordComponent } from './list-word/list-word.component';
import { WordFormComponent } from './components/word-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordComponent,
    WordFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
