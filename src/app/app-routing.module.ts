import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './public/error/error.component';
import { CreditComponent } from './components/pages/credit/credit.component';

const routes: Routes = [
  {path: '**', component: ErrorComponent},
  {path: '', component: AppComponent},
  {path: "credit", component: CreditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
