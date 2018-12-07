import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { FooterComponent } from './Core/footer/footer.component';
import { HeaderComponent } from './Core/header/header.component';
import { ManageAdmissionComponent } from './Admin/manage-admission/manage-admission.component';
import { ManageSchoolfeesComponent } from './Admin/manage-schoolfees/manage-schoolfees.component';
import { ManageTeacherComponent } from './Admin/manage-teacher/manage-teacher.component';
import { ManageClassComponent } from './Admin/manage-class/manage-class.component';
import { RegisterStudentComponent } from './Teacher/register-student/register-student.component';
import { ManageStudentComponent } from './Teacher/manage-student/manage-student.component';

import { ManageStudentresultComponent } from './Teacher/manage-studentresult/manage-studentresult.component';
import { ManageStudentprogressComponent } from './Teacher/manage-studentprogress/manage-studentprogress.component';
import { SideBarComponent } from './Core/side-bar/side-bar.component';
import { DashboardComponent } from './Core/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewProfileComponent } from './Student/view-profile/view-profile.component';
import { ViewResultComponent } from './Student/view-result/view-result.component';
import { LoginComponent } from './LogIn/login.component';

import { TeacherFormComponent } from './Admin/manage-teacher/teacher-form/teacher-form.component';
import { TeacherDetailComponent } from './Admin/manage-teacher/teacher-detail/teacher-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ManageAdmissionComponent,
    ManageSchoolfeesComponent,
    ManageTeacherComponent,
    ManageClassComponent,
    RegisterStudentComponent,
    ManageStudentComponent,
    ManageStudentresultComponent,
    ManageStudentprogressComponent,
    SideBarComponent,
    DashboardComponent,
    ViewProfileComponent,
    ViewResultComponent,
    LoginComponent,
  
    TeacherFormComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
