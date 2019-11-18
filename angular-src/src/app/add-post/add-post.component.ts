import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../models/post.model';
import { AddPostService } from '../add-post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as $ from 'jquery';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [ AddPostService ]
})
export class AddPostComponent implements OnInit {
  public post: Post;

  @ViewChild('addPost', { static: true }) addBtn: ElementRef;


  constructor(private addPostService: AddPostService,
              private flashMsg: FlashMessagesService,
              private commonService: CommonService) {

    this.post = new Post();

    this.commonService.postEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
      // jquery: swap out current quiz-post template with quiz-post edit template:
      this.post = this.commonService.post_to_be_edited;
    });
  }

  ngOnInit() {

    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
      $('html, body').animate({
          scrollTop: $(".navbar").offset().top
      }, 1000);
    });

    $('#jqueryMovieSearchSubmit').click(function(e){
      let qry =  $('#movieSearchTerms').val();
      let jquri = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + qry + '&api-key=tVMze8krMOMw8r3UibJbiZC1rqx9c7hd';

      $.ajax({
           url: jquri,
           type: "GET",
           success: function(data) {
             console.log(data);
             if (data.num_results === 0) {
               $('#movieSearchResults').html('No results, sorry.');
             } else {
               let output="<ul>";
                 for (let i in data.results) {
                   output+="<li>" + data.results[i].display_title + ":  " + data.results[i].summary_short + "</li>";
                  }
               output+="</ul>";
               $('#movieSearchResults').html(output);
             }
           }
        });
       e.preventDefault();
    });
  }

  addPostBtnClick() {
    if(this.post.title && this.post.description && this.post.question_one && this.post.answer_one){

      if (this.post._id) {
        // if _id already exists, update the existing post:
        this.addPostService.updatePost(this.post).subscribe(res => {
          this.commonService.notifyPostAddition();
          $('#newQuizForm')[0].reset();
          this.addBtn.nativeElement.click();
          this.flashMsg.show('Quiz edited!', {cssClass: 'alert-success', timeout: 5000});
          $('html, body').animate({
              scrollTop: $(".navbar").offset().top
          }, 1000);
        });
      } else {
        // if _id doesn't already exist, add a new post:
        this.addPostService.addPost(this.post).subscribe(res =>{
          this.commonService.notifyPostAddition();
          $('#newQuizForm')[0].reset();
          this.addBtn.nativeElement.click();
          $('html, body').animate({
              scrollTop: $(".navbar").offset().top
          }, 1000);
          this.flashMsg.show('New Quiz added!', {cssClass: 'alert-success', timeout: 5000});
          $('html, body').animate({
              scrollTop: $(".navbar").offset().top
          }, 1000);
        });
      }

    } else {
        this.flashMsg.show('Quiz requires 1) Title 2) Description 3) One question and answer', {cssClass: 'alert-danger', timeout: 5000});
        $('html, body').animate({
            scrollTop: $(".navbar").offset().top
        }, 1000);
    }


  }

}
