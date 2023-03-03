import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from '../services/user-storage.service';
import { Question } from '../classes/Question';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuestionService } from '../services/question.service';
import { QuestionResponse } from '../classes/question-response';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
onKey(value: string) {
  if(value==''){
    this.questions= this.questionDuplicate;
  }
  // console.log(event)
  // if(event.target==''){
  //   this.questions= this.questionDuplicate;
  // }
// throw new Error('Method not implemented.');
}


// questions:QuestionResponse;

searched:string="";

  questionBody: String[] = [];
  qid:number[]=[];
  val:string="";
  flag=0
  searchQuestions : Array<QuestionResponse>=[]

  quesResponse: QuestionResponse[] = [];
  questions : Array<QuestionResponse> = [];
  questionDuplicate : Array<QuestionResponse>=[];
  b: boolean = false;

  ques: QuestionResponse= new QuestionResponse();

  
  constructor(private questionService:QuestionService){}

  ngOnInit(): void {
    this.getAll();
  }

  
  getAll(){
    this.questionService.getAllQuestions().subscribe(res=>{
       this.questions=res;
       this.questionDuplicate=res;
       console.log(this.questions)
    })
  }
  



 
  // questions = this.

  
  getValue(values:string){
    this.searchQuestions=[];
    this.val = values
    if(values==''){
      this.questions= this.questionDuplicate;
      // console.log
    }

else{


  for(let ques of this.questions){
    if(ques.question.questionBody.includes(values)){

      console.log("Hi")
      console.log(ques)
      // this.questions.push(ques)
      this.searchQuestions.push(ques);
      // this.qid.push(ques.question.questionId)

      this.questions = this.searchQuestions;
      this.flag = this.flag+1
      
    }
    // else{
      // ques: QuestionResponse = new QuestionResponse();
      // ques.userName="";
      // ques.question.answer=false;
      // ques.question.questionBody="Search query not found"
      // this.questions=this.ques;

    //     // this.questions = 
    //  }
  }
  // console.log("length"+"    "+this.flag)
  // if(this.flag==0){
  //   this.searchQuestions=[];
  //   console.log("HAhahah")
  //   this.ques.userName="";
  //     this.ques.question.answer=true;
  //     this.ques.question.questionBody="Search query not found"
  //     this.ques.question.flag=2
  //     this.ques.question.image=""
  //     this.ques.question.questionId=0
  //     this.ques.question.title=""
  //     this.ques.question.userId;
  //     this.ques.question.views;
  //     this.ques.question.date;
 
  //   this.searchQuestions.push(this.ques)
  //   this.questions = this.searchQuestions;
  // //  this.ques.userName="";
  // //     this.ques.question.answer=false;
  // //     ques.question.questionBody="Search query not found"
  // //     this.questions=this.ques;
  // }

}


   


    // // this.val = values;
    // console.log(values);
    // this.adminservice.serachByKey(values).subscribe(
    //   result=>{
    //     this.que=result;
    //     console.warn(result);
        
    //   }
    // )

  }


  search() {
this.searchQuestions=[]
    if(this.val==''){
      this.questions= this.questionDuplicate;
    }
    else{
console.log(this.val);
      for(let ques of this.questions){
      
        if(ques.question.questionBody.includes(this.val)){
         console.log(ques)
         console.log("Hello")
         // this.questions.push(ques)
         this.searchQuestions.push(ques);
         // this.qid.push(ques.question.questionId)
 
         this.questions = this.searchQuestions;
         // console.log
       
         
       }
      //  else{
      //   // ques: QuestionResponse = new QuestionResponse();
      //   ques.userName="";
      //   ques.question.answer=false;
      //   ques.question.questionBody="Search query not found"
      //   this.questions=this.ques;

      //     // this.questions = 
      //  }
     }
     // throw new Error('Method not implemented.');
     }


    }
    
    



  // onSearch(search:string){
   


  //   // for(var id of this.qid){
  //   //   this.searchQuestions.push()
  //   // }
  
  
  //   // for()
  
  
  
  // }
 
  isLoggedIn():Boolean{
    
    this.b = UserStorageService.isUserLoggedIn() || UserStorageService.isAdminLoggedIn();
    if(this.b)
    {
      
        return true;
    }
    else{
      return false;
    }





  }







  // displayUi: Question[] = [];
  // [
  //   {title:"I am getting Unknown Host Exception Error",question:"I am getting UnknownHostNameError while running simple test cases also. [Error]enter image description here I tried to change version but not worked.",votes:9,views:977,correct:1,name:"Bhuvi",timestamp:"May 10, 2014 at 1:15"},
  //   {title:"How to display an array of array of strings using javascript and html in angular?",question:"I am getting UnknownHostNameError while running simple test cases also. [Error]enter image description here I tried to change version but not worked.",votes:9,views:0,correct:1,name:"Bhuvi",timestamp:"May 10, 2014 at 1:15"},
  //   {title:"Angular template not rendering value of property, but | json on the same object shows property has value",question:"I am getting UnknownHostNameError while running simple test cases also. [Error]enter image description here I tried to change version but not worked.",votes:9,views:977,correct:1,name:"Bhuvi",timestamp:"May 10, 2014 at 1:15"}

  // ]



}
