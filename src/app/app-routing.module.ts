import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'navbar', component:NavbarComponent },
  { path: 'add', component:AdduserComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
