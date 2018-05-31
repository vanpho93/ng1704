import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListWordComponent } from './components/list-word.component';

import { WordFormComponent } from './components/word-form.component';
import { WordComponent } from './components/word.component';
import { WordFilterComponent } from './components/word-filter/word-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordComponent,
    WordFormComponent,
    WordFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
