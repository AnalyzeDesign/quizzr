import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private http: HttpClient) { }

  addPost(post: Post){
    return this.http.post('/api/post/createPost',{
        title: post.title,
        description: post.description,

        question_one: post.question_one,
        answer_one: post.answer_one,

        question_two: post.question_two,
        answer_two: post.answer_two,

        question_three: post.question_three,
        answer_three: post.answer_three,

        question_four: post.question_four,
        answer_four: post.answer_four,

        question_five: post.question_five,
        answer_five: post.answer_five
      });
    }

    updatePost(post: Post){
      return this.http.post('/api/post/updatePost',{
          id: post._id,
          title : post.title,
          description : post.description,

          question_one: post.question_one,
          answer_one: post.answer_one,

          question_two: post.question_two,
          answer_two: post.answer_two,

          question_three: post.question_three,
          answer_three: post.answer_three,

          question_four: post.question_four,
          answer_four: post.answer_four,

          question_five: post.question_five,
          answer_five: post.answer_five
      });
    }
 }
