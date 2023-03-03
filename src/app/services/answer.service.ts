import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../classes/answer';
import { AnswerResponse } from '../classes/answer-response';
 
@Injectable({
 providedIn: 'root'
})
export class AnswerService {
 
 constructor(private http:HttpClient) { }
 
 addAnswer(data:Answer):Observable<Answer>{
 return this.http.post<Answer>("http://localhost:8083/answer/add",data);
 }
 
 getAnswersForQuestion(qid:number):Observable<Array<AnswerResponse>>{
 
 return this.http.get<Array<AnswerResponse>>("http://localhost:8083/answer/get/"+qid);
 }
 
}