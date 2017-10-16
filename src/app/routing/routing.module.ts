import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/about',
  //   pathMatch: 'full'
  // },
  {
    path: 'portfolio/about',
    component: AboutComponent
  },
  {
    path: 'portfolio/projects',
    component: ProjectsComponent
  },
  {
    path: 'portfolio/contact',
    component: ContactComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
