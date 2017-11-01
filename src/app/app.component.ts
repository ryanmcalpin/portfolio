import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { BlogService } from './blog.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  collapsedState = 'shown';
  routeTitle: string = '';

  constructor(private router: Router,
              private blogService: BlogService) { }

  checkNav(nav): string {
    if (nav === '/blog' && this.router.url.slice(0, 5) === '/blog' && this.router.url.length > 5) {
      var post = this.blogService.getPost(this.router.url.slice(6));
      this.routeTitle = post.title;
      return 'active';
    }

    if (nav === this.router.url) {
      this.routeTitle = nav.charAt(1).toUpperCase() + nav.slice(2);
      return 'active';
    } else {
      return '';
    }
  }

  checkCollapsed() {
    var el = document.getElementById('nav-button');
    if (this.router.url.length > 5 && this.router.url.slice(0, 5) === '/blog') {
      this.collapsedState = el.classList.contains('collapsed') ? 'hidden title' : 'shown title';
    } else {
      this.collapsedState = el.classList.contains('collapsed') ? 'hidden' : 'shown';
    }
  }
}
