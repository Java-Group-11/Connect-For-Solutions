import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  singupForm!: FormGroup
  title = 'validation'
  submitted = false;


  storemsg: string="";
  user : User = new User();
  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private userService : UserService,private router:Router,private authService:AuthService){

  }

  ngOnInit(): void {

    this.singupForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
    
  }
  // onSubmit1(){
  //   this.submitted = true
  //   if(this.singupForm.invalid){
  //     return
  //   }
  //   alert('success')
  // }

  onSubmit(){

   this.submitted =true

    console.log(this.user);
    if(this.singupForm.valid){
      console.log("IN function");
      this.user.userName=this.singupForm.value.name;
    this.user.userEmail=this.singupForm.value.email;
    this.user.userPassword=this.singupForm.value.password;
      this.authService.register(this.user).subscribe((res)=>{
        if(res.userId!=null){
          alert("register success");
          this.router.navigateByUrl('/login');
        }
        else{
            alert("error");
        }
      })
    }
    else{
      console.log("Form invalid");
    }
    

  }

}
