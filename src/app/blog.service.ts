import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  posts: any[];

  constructor() {
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

  getPosts() {
    return this.posts;
  }

  getPost(i) {
    return this.posts[i];
  }

}
