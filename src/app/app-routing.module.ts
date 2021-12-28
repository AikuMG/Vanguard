import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';
import { AddFundComponent } from './add-fund/add-fund.component';

const routes: Routes = [
  {path: "funds/add-fund", component: AddFundComponent},
  {path: "funds", component: FundsComponent},
  {path: "funds/:id", component: FundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
