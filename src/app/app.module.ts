import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StuRegistationComponent } from './stu-registation/stu-registation.component';
import { StuDetailsComponent } from './stu-details/stu-details.component';
import { EmpRegistationComponent } from './emp-registation/emp-registation.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { TeaRegistationComponent } from './tea-registation/tea-registation.component';
import { TeaDetailsComponent } from './tea-details/tea-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    TeacherComponent,
    StuRegistationComponent,
    StuDetailsComponent,
    EmpRegistationComponent,
    EmpDetailsComponent,
    TeaRegistationComponent,
    TeaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
