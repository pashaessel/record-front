import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {path: 'sign-up',
  component: SignUpComponent },
  {path: 'sign-in',
  component: SignInComponent },
  {path: 'home',
  component: HomeComponent },
  {path: '*',
  component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
