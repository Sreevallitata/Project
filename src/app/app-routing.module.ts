import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProteinComponent} from './Protein/protein.component';
import {MacrosComponent} from "./Macros/macros.component";
import {cheatsheetComponent} from "./cheatsheet/cheatsheet.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'search-protein', component: ProteinComponent},
  { path: 'Macros', component: MacrosComponent},
  { path: 'cheatsheet', component: cheatsheetComponent},
  {path: 'account', component: RegistrationComponent},
  {path: 'account/:emailid', component: LoginComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
