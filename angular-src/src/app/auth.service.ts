import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { JwtHelperService } from 'angular-jwt';

export interface UserAuthResponse {
  success: boolean,
  token: string,
  msg: string,
  user: any
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;



  // for use with registerUser, etc:
  //localUrl: string = 'http://localhost:3000/users/register';
  //herokuUrl: string = 'users/register';

  constructor(private http: HttpClient) { } // , private jwtHelperService: JwtHelperService

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(
      'users/register', user, {headers: headers})
      .pipe(map(data => data));
  }

  authenticateUser(user): Observable<UserAuthResponse>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<UserAuthResponse>(
      'users/authenticate', user, {headers: headers})
      .pipe(map(data => data));
  }

  // getProfile(){
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   this.loadToken();
  //   console.log(this.authToken);
  //   headers.append('Authorization', this.authToken);
  //   return this.http.get(
  //     'http://localhost:3000/users/profile', {headers: headers})
  //     .pipe(map(data => data));
  // }
  getProfile(): any {
    this.loadToken();
    let headers = new HttpHeaders().append('Authorization', this.authToken).append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token); // angular-jwt should look for this name
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    // fetch from localStorage
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // loggedIn(){
  //   return tokenNotExpired();
  // }
  // loggedIn(){
  //
  //  if (localStorage.id_token == undefined ){
  //     console.log('Hello');
  //     return true;
  //  } else {
  //    console.log('Goodbye');
  //    const helper = new JwtHelperService();
  //    console.log(helper.isTokenExpired(localStorage.id_token));
  //    return helper.isTokenExpired(localStorage.id_token); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
  //    }
  // }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
