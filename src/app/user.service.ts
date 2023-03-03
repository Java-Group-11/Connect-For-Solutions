import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:8080/user";

  constructor(private httpClient : HttpClient ) { }

  lstoreUserDetails(user: User): Observable<string> {
    return this.httpClient.post("http://localhost:8080/user/adduser", user,{ responseType: 'text' })
  }

  loginUserDetails(user: User): Observable<Boolean> {
    return this.httpClient.post<Boolean>("http://localhost:8080/user/loginuser", user)
  }

  loginAdminDetails(user:User): Observable<Boolean>{
    return this.httpClient.post<Boolean>("http://localhost:8080/user/loginadmin",user)
  }
}
