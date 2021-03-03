import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [ 
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
