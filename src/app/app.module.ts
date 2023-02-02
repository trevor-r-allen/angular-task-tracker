import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../../lib/components/header/header.component';
import { ButtonComponent } from '../../lib/components/button/button.component';
import { TasksComponent } from '../../lib/features/task-tracker/tasks/tasks.component';
import { TaskItemComponent } from '../../lib/features/task-tracker/task-item/task-item.component';
import { AddTaskComponent } from '../../lib/features/task-tracker/add-task/add-task.component';
import { AboutComponent } from '../../lib/features/about/about.component';
import { FooterComponent } from '../../lib/components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
