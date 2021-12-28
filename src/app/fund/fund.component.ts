import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  tempFundList: any[][] = [];
  fund: Fund = {};

  constructor(private route: ActivatedRoute, private fundService: FundService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = params['id'];
      this.fundService.getFund(myid).subscribe(payload => {
        this.fund = payload;
        for(const [key, value] of Object.entries(this.fund)){
          const localArray = [key, value, false];
          this.tempFundList.push(localArray);
        }
      })
    })
  }

  update(): void {
    this.fundArrayConverter();
    this.fundService.updateFund(this.fund).subscribe();
  }

  makeChange(index: number) {
      this.tempFundList[index][2] = true;
  }
    
  makeStatic(index: number) {
      this.tempFundList[index][2] = false;
  }

  fundArrayConverter(): void {
    const rebuiltFund: any = {};
    this.tempFundList.forEach(item=> {
      rebuiltFund[item[0]] = item[1];
    })

    this.fund = rebuiltFund
  }
    
}
