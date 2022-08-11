import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)}, 
  {path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)}, 
  {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},  
  { path: '',   redirectTo: '/public/login', pathMatch: 'full' },
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
