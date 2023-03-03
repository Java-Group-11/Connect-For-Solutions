import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQueryComponent } from './ask-query/ask-query.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { RegisterComponent } from './register/register.component';
import { SiderComponent } from './sider/sider.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'changePassword', component:ChangePasswordComponent},
  {path : 'index',component:NavComponent},
  {path : 'userPage', component: UserPageComponent},
  {path : 'askQuery', component:AskQueryComponent},
  {path: 'Footer', component:FooterComponent},
  {path: 'sider', component:SiderComponent},
  {path: 'question/:qid',component:QuestionAnswerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
