import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund/fund.model';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {

  constructor(private fund: FundService) { }

  funds: Fund[] = [];

  ngOnInit(): void {

    this.fund.getFunds().subscribe(payload => {
      this.funds = payload;
    })
  }
  
  deleteFund(fund: any) {
    this.fund.delete(fund.id).subscribe(fund => {
      this.fund.getFunds().subscribe(funds => this.funds = funds);
    });
  }
}
