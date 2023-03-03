import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username: string='';

  b:Boolean=false;
  
  ngOnInit(): void {
   
  }

  isLoggedIn():Boolean{
    
    this.b = UserStorageService.isUserLoggedIn() || UserStorageService.isAdminLoggedIn();
    if(this.b)
    {
      
        this.username=UserStorageService.getUser().username;
        return true;
    }
    else{
      return false;
    }


  }

  logout():void{
    UserStorageService.signOut();
    window.location.reload();
  }

}

