import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any[];

  constructor(private router: Router,
              private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

  goToPost(i) {
    this.router.navigate(['/blog', i]);
  }

}
