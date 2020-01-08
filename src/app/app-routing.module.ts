import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldcountriesComponent } from './worldcountries/worldcountries.component';
import { UsersComponent } from './users/users.component';
import { ColorsComponent } from './colors/colors.component';


const routes: Routes = [
  {path:'countries',component:WorldcountriesComponent},
  {path:'users',component:UsersComponent},
  {path:'colors',component:ColorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
