import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternDetailComponent } from './intern/intern-detail/intern-detail.component';
import { InternFormComponent } from './intern/intern-form/intern-form.component';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { MentorDetailComponent } from './mentor/mentor-detail/mentor-detail.component';
import { MentorFormComponent } from './mentor/mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor/mentor-list/mentor-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'mentor',
    children: [
      {
        path: 'list',
        component: MentorListComponent
      },
      {
        path: 'form',
        component: MentorFormComponent
      },
      {
        path: ':id',
        component: MentorDetailComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  },
  {
    path: 'intern',
    children: [
      {
        path: 'list',
        component: InternListComponent
      },
      {
        path: 'form',
        component: InternFormComponent
      },
      {
        path: ':id',
        component: InternDetailComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
