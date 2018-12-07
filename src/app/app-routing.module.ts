import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ManageAdmissionComponent} from './Admin/manage-admission/manage-admission.component';
import {ManageSchoolfeesComponent} from './Admin/manage-schoolfees/manage-schoolfees.component';
import {ManageClassComponent} from './Admin/manage-class/manage-class.component';
import {ManageTeacherComponent} from './Admin/manage-teacher/manage-teacher.component';

import{RegisterStudentComponent} from './Teacher/register-student/register-student.component';
import{ManageStudentComponent} from './Teacher/manage-student/manage-student.component';
import{ManageStudentprogressComponent} from './Teacher/manage-studentprogress/manage-studentprogress.component';
import{ManageStudentresultComponent} from './Teacher/manage-studentresult/manage-studentresult.component';

import{ViewProfileComponent} from './Student/view-profile/view-profile.component';
import{ViewResultComponent} from './Student/view-result/view-result.component'
import { LoginComponent } from './LogIn/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'manageAdmission', component: ManageAdmissionComponent },
  { path : 'manageSchoolfees', component: ManageSchoolfeesComponent},
  { path: 'manageTeacher', component: ManageTeacherComponent },
  { path : 'manageClass', component: ManageClassComponent},
  { path : 'login', component:LoginComponent},

  { path : 'registerStudent', component: RegisterStudentComponent},
  { path : 'manageStudent', component: ManageStudentComponent},
  { path : 'manageStudentprogress', component: ManageStudentprogressComponent},
  { path : 'manageStudentresult', component: ManageStudentresultComponent},

  { path : 'viewProfile', component:ViewProfileComponent},
  { path :'viewResult',component :ViewResultComponent}
];

@NgModule({
  imports: [
    CommonModule,
   RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
