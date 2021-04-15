import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/main-layout/navbar/navbar.component';
import { FooterComponent } from './components/main-layout/footer/footer.component';
import { CoursesComponent } from './components/student/courses/courses.component';
import { CreateGroupComponent } from './components/teacher/create-group/create-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './components/student/reservation/reservation.component';
import { StudentcourseComponent } from './components/student/studentcourse/studentcourse.component';
import { ShowTeacherComponent } from './components/teacher/show-teacher/show-teacher.component';
import { ShowGroupComponent } from './components/teacher/show-group/show-group.component';
import { ManageTeachersComponent } from './components/admin/manage-teachers/manage-teachers.component';
import { ShowgrouppostsComponent } from './components/student/showgroupposts/showgroupposts.component';
import { ModifyteacherinfoComponent } from './components/admin/admin-teacher/modifyteacherinfo/modifyteacherinfo.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CoursesComponent,
    CreateGroupComponent,
    ReservationComponent,
    StudentcourseComponent,
    ShowTeacherComponent,
    ShowGroupComponent,
    ShowgrouppostsComponent,
    ManageTeachersComponent,
    ModifyteacherinfoComponent,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
