import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component'; // Import AppLayoutComponent
import { authGuard } from './services/auth/auth.guard'; // Assuming authGuard is correctly implemented

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent, // Use AppLayoutComponent here
    canActivate: [authGuard], // Assuming AuthGuard is implemented
    children: [
      { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
      { path: 'issues', loadChildren: () => import('./modules/issues/issues.module').then(m => m.IssuesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
