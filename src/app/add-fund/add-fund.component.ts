import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss']
})
export class AddFundComponent implements OnInit {

  fund: Fund = {
    name: '',
    ticker: '',
    asset_class: '',
    risk_level: 0,
    expense_ratio: 0,
    investment_min: 0,
    price: 0,
    change_price: 0
  }

  submitted = false;

  constructor(private fundService: FundService) { }

  ngOnInit(): void {
  }

  saveFund(): void {
    const info = {
      name: this.fund.name,
      ticker: this.fund.ticker,
      asset_class: this.fund.asset_class,
      risk_level: this.fund.risk_level,
      expense_ratio: this.fund.expense_ratio,
      investment_min: this.fund.investment_min,
      price: this.fund.price,
      change_price: this.fund.change_price,
    };

    this.fundService.add(info).subscribe({
      next: (res) => {
        this.submitted=true;
      }
    });
  }

  newFund(): void {
    this.submitted = false;
    this.fund = {
      name: '',
      ticker: '',
      asset_class: '',
      risk_level: 0,
      expense_ratio: 0.0,
      investment_min: 0,
      price: 0,
      change_price: 0,
    };
  }
}
