import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TodoAddComponent } from './Components/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './Components/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TodoAddComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
