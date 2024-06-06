import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { MealComponent } from './meal/meal.component';
import { MarkCompletedDirective } from './mark-completed.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodoComponent,
    TodoMainComponent,
    TodoFormComponent,
    NavComponent,
    MealComponent,
    MarkCompletedDirective
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
