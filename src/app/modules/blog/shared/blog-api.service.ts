import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  pageNumber: number = 1;
  limit = 10;
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: Post[] = [];
  postsCount:number = 0;

  constructor(private http: HttpClient) { }

  loadPage(pageNumber: number = 1) {
    this.pageNumber = pageNumber;
    let start = (pageNumber - 1) * this.limit;
    let url = `${this.apiUrl}/?_limit=${this.limit}&_start=${start}`;
    let request = this.http.get(url, {observe: 'response'});

    this.http.get('/assets/products.json').subscribe(data => {console.log(data)});

    return new Observable(observer => {

      console.log('asd');
      request.subscribe(response => {
        
        let totalCount = response.headers.get('x-total-count');
        this.postsCount = Number(totalCount);
        this.posts = <Post[]>response.body;
        console.log(response.body);
        observer.next(response.body);
        observer.complete();
      })
    });
  }
}
