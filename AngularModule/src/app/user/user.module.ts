import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    CreateNewUserComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[LoginComponent, CreateNewUserComponent ]
})
export class UserModule { }
