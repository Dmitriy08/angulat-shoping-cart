import { UserPageComponent } from './components/user-page/user-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'users', children: [
    {path: '', component: UsersPageComponent},
    {path: ':id', component: UserPageComponent},
  ]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
