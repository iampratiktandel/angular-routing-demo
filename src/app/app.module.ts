import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorListComponent } from './mentor/mentor-list/mentor-list.component';
import { MentorFormComponent } from './mentor/mentor-form/mentor-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternModule } from './intern/intern.module';
import { MentorDetailComponent } from './mentor/mentor-detail/mentor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MentorListComponent,
    MentorFormComponent,
    DashboardComponent,
    MentorDetailComponent
  ],
  imports: [
    BrowserModule,
    InternModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
