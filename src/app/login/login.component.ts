import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isConstructSignatureDeclaration } from 'typescript';
import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';
import { UserStorageService } from '../services/user-storage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup
  title = 'validation'
  submitted = false;

  user:User =new User();


  msg : string = "";

  constructor(private userService:UserService,private router :Router,private fromBuilder: FormBuilder,private authService : AuthService){}

  ngOnInit(): void {
    
    this.loginForm = this.fromBuilder.group({

      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    
    })

  }
  onSubmit1(){
    this.submitted = true
    if(this.loginForm.invalid){
      return
    }
    alert('success')
  }

  onSubmit():void{
  
    this.submitted = true
    this.user.userEmail = this.loginForm.value.userEmail;

    this.user.userPassword = this.loginForm.value.userPassword;

   // console.log(this.user);

 /* if(this.loginForm.value.role==true)
    {
      this.user.role="ADMIN";
      console.log("Admin");
      this.userService.loginAdminDetails(this.user).subscribe(isValid=> {
        if(isValid)
        {
            alert("admin login success");
            this.router.navigate(['/home']);
        }
        else{  
          alert("admin login fails");
          this.router.navigate(['login']);
        }
      })
    }
    else
    {   
    this.userService.loginUserDetails(this.user).subscribe(isValid=> {
      if(isValid)
      {
          alert("user login success");
          this.router.navigate(['/home']);
      }
      else{
        alert("user login fails");
        this.router.navigate(['/login']);
      }
    })
    }
    */

    console.log(this.loginForm.valid)
    if(this.loginForm.valid)
    {
        console.log(this.loginForm.value)
        this.authService.login(this.loginForm.get(['email'])!.value,this.loginForm.get(['password'])!.value)
        .subscribe(
          (res: any)=>{
          
          if(UserStorageService.isUserLoggedIn()){
            this.router.navigate(['/home'])
          }
          else if(UserStorageService.isAdminLoggedIn()){
            this.router.navigateByUrl('home');
          }

        },(_error: any)=>{
          alert("login fails");
        }
        )
    }
    else{
      console.log("invalid")
    }
  }
}
