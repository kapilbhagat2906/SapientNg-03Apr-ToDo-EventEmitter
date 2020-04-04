import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoModule } from './toDo/to-do.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToDoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
