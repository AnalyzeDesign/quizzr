import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShowPostService {

  constructor(private http: HttpClient) { }

  getAllPost(){
      return this.http.post('/api/post/getAllPost',{});
  }

  deletePost(id) {
    return this.http.post('/api/post/deletePost', {id: id});
  }
}
