import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListWordComponent } from './components/list-word.component';

import { WordFormComponent } from './components/word-form.component';
import { WordComponent } from './components/word.component';
import { WordFilterComponent } from './components/word-filter.component';
import { ChatComponent } from './components/chat.component';
import { ParentComponent, ChildComponent } from './components/interact';
import { WordService } from './services/word.service';

import { countReducer, wordsReducer, shouldShowFormReducer, filterModeReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordComponent,
    WordFormComponent,
    WordFilterComponent,
    ParentComponent,
    ChildComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      count: countReducer,
      words: wordsReducer,
      shouldShowForm: shouldShowFormReducer,
      filterMode: filterModeReducer
    })
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})

export class AppModule { }
