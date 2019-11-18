import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMsg: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      this.flashMsg.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    // Valid email format
    if(!this.validateService.validateEmail(user.email)) {
      this.flashMsg.show('Please enter a valid email', {cssClass:'alert-danger', timeout: 3000});
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data["success"] === true){//data.success){
        this.flashMsg.show('You are now registered and can log in', {cssClass:'alert-success', timeout: 3000});
        console.log('data', data);
        this.router.navigate(['/login']);
      } else {
        this.flashMsg.show('Something went wrong', {cssClass:'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
  }

}
