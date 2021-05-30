import { BlogApiService } from './../../shared/blog-api.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  loading = true;
  pageNumValue = 1;
  pageLimit = 0;

  constructor(private blogApi: BlogApiService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.pageNum = params.id || 1;
      this.blogApi.loadPage(this.pageNum).subscribe((posts) => {
        this.posts = <Post[]>posts;
        this.pageLimit = this.blogApi.limit;
        this.loading = false;
      });
    })
  }

  get pageNum() {
    return this.pageNumValue;
  }

  set pageNum(value) {
    console.log(value);
    this.pageNumValue = value;
    this.router.navigate(['blog/page', value]);
  }

  get postsCount() {
    return this.blogApi.postsCount;
  }

}
