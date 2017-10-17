import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: any[];

  constructor(private router: Router) {
    this.posts = [
      {
        title: "This is the Title",
        lede: "This is the lede.",
        body: "This is the body. It's very insightful."
      },
      {
        title: "This is the Other Title",
        lede: "This is other the lede.",
        body: "This is the other body. It's very insightful."
      }
    ]
  }

  ngOnInit() {
  }

  goToPost(i) {
    this.router.navigate(['/blog', i]);
  }

}
