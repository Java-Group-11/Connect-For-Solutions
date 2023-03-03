import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap,map } from 'rxjs';
import { ChangePassword } from '../classes/change-password';
import { User } from '../classes/user';
import { UserStorageService } from './user-storage.service';

export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ,private userStorageService:UserStorageService) {}


  register(data:User):Observable<User>{
    console.log(data);
    console.log(data.userName);
    return this.http.post<User>("http://localhost:8081/user/adduser",data);
  }

  login(userName:string,userPassword:string):any{
    console.log(userName,userPassword)
    return this.http.post<[]>( "http://localhost:8081/user/authenticate", {
      userName,
      userPassword
    }, {observe: 'response'})
      .pipe(
        tap(_ => this.log('User Authentication')),
        map((res: HttpResponse<any>) => {
          this.userStorageService.saveUser(res.body);
          console.log(res);
          const tokenLength = res.headers.get(AUTH_HEADER)?.length;
          const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7,tokenLength);
          if(bearerToken!=null)
          this.userStorageService.saveToken(bearerToken);
          return res;
      }));
  }

  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }

  changePassword(data:ChangePassword):Observable<string>{
    return this.http.post("http://localhost:8081/user/change",data,{responseType : 'text'});
  }
  
}
