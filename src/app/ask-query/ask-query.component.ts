import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../classes/Question';
import { QuestionService } from '../services/question.service';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-ask-query',
  templateUrl: './ask-query.component.html',
  styleUrls: ['./ask-query.component.css']
})
export class AskQueryComponent implements OnInit{

  questionForm !: FormGroup

  question : Question = new Question();

  constructor(private router:Router,private formBuilder:FormBuilder, private questionService:QuestionService){}
  ngOnInit(): void {
   
    this.questionForm = this.formBuilder.group({

      title: ['',[Validators.required]],
      questionBody: ['',[Validators.required]],
    
    })

  }

  onSubmit(){

    console.log(this.questionForm.valid)
    if(this.questionForm.valid)
    {
      console.log(this.questionForm.value)
      
      
      this.question.title = this.questionForm.value.title;
      console.log(this.questionForm.value.title);
      this.question.questionBody = this.questionForm.value.questionBody;
      console.log(this.questionForm.value.questionBody);

      this.question.userId = UserStorageService.getUser().id;


     this.questionService.addQuestion(this.question).subscribe(res=>{
        console.log(res);
        alert("question posted");
        this.router.navigateByUrl("/home");
      })


    }

  }


}
