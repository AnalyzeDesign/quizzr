import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowPostService } from '../show-post.service';
import { CommonService } from '../common.service';
import * as $ from 'jquery';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {

  @ViewChild('closeBtn', { static: true }) closeBtn: ElementRef;

  public posts: any [];
  public post_to_delete;

  constructor(private showPostService: ShowPostService,
              private commonService: CommonService) {
  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });

  }

  getAllPost(){
    this.showPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
      console.log('this.posts:', this.posts);
    });
    $('.quizzesList .list-group-item').show();
    $('.quizzesList .editingIndicator').remove();
  }

  editPost(post: Post){
    this.commonService.setPostToEdit(post);
    $('.quizzesList .list-group-item').hide();
    $('.quizzesList').prepend("<div class='editingIndicator'>Currently editing quizzes!</div>");
  }

  setDelete(post: Post){
    this.post_to_delete = post;
  }

  unsetDelete(){
    this.post_to_delete = null;
  }

  deletePost(){
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.getAllPost();
      this.closeBtn.nativeElement.click();
    });
  }




}
