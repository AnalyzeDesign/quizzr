import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // watching these:

  // post added:
  public postAdded_Observable = new Subject();

  // post mark to edit:
  public post_to_be_edited;
  setPostToEdit(post: Post){
    this.post_to_be_edited = post;
    this.notifyPostEdit();
  }

  // post edited:
  public postEdit_Observable = new Subject();
  notifyPostEdit(){
    this.postEdit_Observable.next();
  }


  constructor() {
    this.post_to_be_edited = new Post();
  }

  notifyPostAddition() {
    this.postAdded_Observable.next();
  }
}

/*
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public postAdded_Observable = new Subject();

  public postEdit_Observable = new Subject();

  public post_to_be_edited;

  constructor() {
    this.post_to_be_edited = new Post();
  }

  notifyPostAddition() {
    this.postAdded_Observable.next();
  }

  notifyPostEdit(){
    this.postEdit_Observable.next();
  }

  setPostToEdit(post: Post){
    this.post_to_be_edited = post;
    this.notifyPostEdit();
  }



}

*/
