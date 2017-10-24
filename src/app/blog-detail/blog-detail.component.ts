import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    var i = this.router.url.slice(6);
    this.post = this.blogService.getPost(i);
  }

}
