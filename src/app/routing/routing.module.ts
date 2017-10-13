import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/about',
  //   pathMatch: 'full'
  // },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
