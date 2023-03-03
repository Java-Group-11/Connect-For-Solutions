import { Component, OnInit } from '@angular/core';
import { User } from './classes/user';
import { UserStorageService } from './services/user-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  ngOnInit(): void {
   
  }

 

}
