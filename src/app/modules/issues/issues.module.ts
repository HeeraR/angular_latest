
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: IssuesComponent }
];

@NgModule({
  declarations: [IssuesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IssuesModule { }
