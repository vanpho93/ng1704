import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListWordComponent } from './components/list-word.component';

import { WordFormComponent } from './components/word-form.component';
import { WordComponent } from './components/word.component';
import { WordFilterComponent } from './components/word-filter.component';
import { ParentComponent, ChildComponent } from './components/interact';
import { WordService } from './services/word.service';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordComponent,
    WordFormComponent,
    WordFilterComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})

export class AppModule { }
