import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternListComponent } from './intern-list/intern-list.component';
import { InternFormComponent } from './intern-form/intern-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { InternDetailComponent } from './intern-detail/intern-detail.component';

@NgModule({
  declarations: [InternListComponent, InternFormComponent, InternDetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [InternListComponent, InternFormComponent]
})
export class InternModule { }
