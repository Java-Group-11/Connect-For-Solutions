import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../user.service';
import { User } from '../classes/user';
import { UserStorageService } from '../services/user-storage.service';
import { ChangePassword } from '../classes/change-password';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm!: FormGroup
  submitted = false;


  changePassword : ChangePassword = new ChangePassword();
  

  constructor(private formBuilder: FormBuilder, private _Http: HttpClient, private userService: UserService, private router: Router,private authService:AuthService) { }
  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({

      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      enterNewPassword: ['', [Validators.required, Validators.minLength(8)]],
      reEnterNewPassword: ['', [Validators.required, Validators.minLength(8)]],

    })
  }

  onSubmit() {
    this.submitted = true

    console.log(UserStorageService.getUser())

    this.changePassword.userEmail = UserStorageService.getUser().email;
    this.changePassword.oldPassword = this.changePasswordForm.value.oldPassword;
    this.changePassword.newPassword = this.changePasswordForm.value.reEnterNewPassword;

    console.log(this.changePassword);

    console.log(this.changePasswordForm.valid)
    if(this.changePasswordForm.valid)
    {

        this.authService.changePassword(this.changePassword).subscribe(res=>{

          console.log(res);

          alert("success")

        })
        
    }
  }

}
