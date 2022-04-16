import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookDetailsComponent } from './components/bookdetails/bookdetails.component';
import { Book } from './components/book/book.component';

const routes: Routes = [
  {path:'home', component:BookComponent },
      {path:'bookdetails', component:BookDetailsComponent, data:Book },
      {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
