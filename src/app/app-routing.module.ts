import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StuRegistationComponent } from './stu-registation/stu-registation.component';
import { StuDetailsComponent } from './stu-details/stu-details.component';
import { EmpRegistationComponent } from './emp-registation/emp-registation.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { TeaRegistationComponent } from './tea-registation/tea-registation.component';
import { TeaDetailsComponent } from './tea-details/tea-details.component';

const routes: Routes = [
  {
    path:"stu", component:StudentComponent,
    children:[{
      path:"stuReg", component:StuRegistationComponent
    },
    {
      path:"stuDetl", component:StuDetailsComponent
    }]
  },
  {
    path:"emp", component:EmployeeComponent,
    children:[
      {
        path:"empReg", component:EmpRegistationComponent
      },
      {
        path:"empDetl", component:EmpDetailsComponent
      }
    ]
  },
  {
    path:"tec", component:TeacherComponent,
    children:[
      {
        path:"teaReg",component:TeaRegistationComponent
      },
      {
        path:"teaDetl", component:TeaDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
