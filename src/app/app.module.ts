import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
