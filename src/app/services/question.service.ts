import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../classes/Question';
import { QuestionResponse } from '../classes/question-response';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  addQuestion(data:Question):Observable<Question>{
    console.log(data);
    return this.http.post<Question>("http://localhost:8082/question/add",data);
    }
    
    getAllQuestions():Observable<Array<QuestionResponse>>{
    return this.http.get<Array<QuestionResponse>>("http://localhost:8082/question/getall");
    }
    
    getQuestion(qid:number):Observable<QuestionResponse>{
    return this.http.get<QuestionResponse>("http://localhost:8082/question/get/"+qid);
    }

}
