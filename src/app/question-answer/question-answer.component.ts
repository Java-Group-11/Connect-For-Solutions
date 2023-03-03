import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '../classes/answer';
// import { Answer } from '../classes/answer';
import { AnswerResponse } from '../classes/answer-response';
import { QuestionResponse } from '../classes/question-response';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {
  qid: any;
  questionId !: number;
  answers: AnswerResponse[] = [];
  q: QuestionResponse = new QuestionResponse();
  answerForm!: FormGroup
  answer: Answer = new Answer();
  
  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService, private formBuilder: FormBuilder, private answerService: AnswerService,private router:Router) { }

  ngOnInit(): void {



    this.answerForm = this.formBuilder.group({


      answerBody: ['', [Validators.required]],

    })

    this.getQuestion();
  }

  onSubmit() {
    console.log(this.answerForm.valid)
    if (this.answerForm.valid) {
      this.answer.answerBody = this.answerForm.value.answerBody;
      this.answer.userId = UserStorageService.getUser().id;
      this.answer.questionId = this.q.question.questionId;
      this.answerService.addAnswer(this.answer).subscribe(res => {
        console.log(res);
        alert("answer added");
        window.location.reload();
      })
    }
  }

  getAnswers(questionId:number) {
    this.answerService.getAnswersForQuestion(questionId).subscribe(res => {
      this.answers = res;
      console.log(res);
    });
  }

  getQuestion() {
    let v;
    this.qid = this.activatedRoute.snapshot.paramMap.get('qid');
    console.log(typeof this.qid)
    this.questionService.getQuestion(Number(this.qid)).subscribe(res => {
      this.q = res;
      this.questionId=this.q.question.questionId;
      this.getAnswers(this.questionId)
    })
  }

}
