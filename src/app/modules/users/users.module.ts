import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { RegisterComponent } from '../../components/register/register.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UsersComponent }
];

@NgModule({
  declarations: 
  [UsersComponent,
  RegisterComponent],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class UsersModule { }
