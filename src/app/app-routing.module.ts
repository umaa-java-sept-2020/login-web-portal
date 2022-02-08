import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './components/auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
   {path : 'login', component : LoginComponent},
// {path: 'reset-password', component : ResetPasswordComponent }
{path: 'reset-password/:userName/:token', component : ResetPasswordComponent, canActivate: [AuthGuard] },
{path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] },
// {path:'dashboard', redirectTo : 'http://localhost:49400/', pathMatch:'full',canActivate: [AuthGuard]},
{path: 'reset-password', component : ResetPasswordComponent},
{path:'', redirectTo : '/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
