import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternDetailComponent } from './intern/intern-detail/intern-detail.component';
import { InternFormComponent } from './intern/intern-form/intern-form.component';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { MentorDetailComponent } from './mentor/mentor-detail/mentor-detail.component';
import { MentorFormComponent } from './mentor/mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor/mentor-list/mentor-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  /** Basic Routing */
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
  },
  /** /Basic Routing */
  /** Lazy Loading */
  {
    path: 'hr',
    loadChildren: () => import('./hr/hr.module').then(m => m.HrModule)
  },
  /** /Lazy Loading */
  {
    path: 'student',
    children: [
      {
        path: '',
        component: StudentListComponent
      },
      {
        path: 'add',
        component: StudentFormComponent
      },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: ''
      // }
    ]
  },
  /** Lazy Loading */
  { 
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) 
  },
  /** /Lazy Loading */
  /** Wildcard Route */
  {
    path: '**',
    component: PageNotFoundComponent
  }
  /** /Wildcard Route */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
