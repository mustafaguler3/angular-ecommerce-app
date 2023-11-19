import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './home/components/not-found/not-found.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
