import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  collapsedState = 'shown';

  constructor(private router: Router) { }

  checkNav(nav): string {
    return nav === this.router.url ? 'active' : '';
  }

  checkCollapsed() {
    var el = document.getElementById('nav-button');
    this.collapsedState = el.classList.contains('collapsed') ? 'hidden' : 'shown';
  }
}
