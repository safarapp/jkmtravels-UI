import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {QuoteResponse} from "../model/quote.response";
import {StorageService} from "../common/storage.service";
import {QuoteRequest} from "../model/quote.request";
import {DataSharedService} from "../common/datashared.service";

@Component({
  moduleId: module.id,
  selector: 'busSearch',
  templateUrl: 'busSearch.component.html',
  styleUrls: ['../../css/bussearch.css', '../../css/font-awesome.css']
})

export class BusSearchComponent implements OnInit {

  quoteResponse: QuoteResponse[];
  quoteRequest:QuoteRequest;

  /**
   *
   * @param router
   */
  constructor(private router : Router, private _cdStorageService:StorageService, private dataSharedService : DataSharedService) {

  }


  /**
   *
   * Initial method for home
   */
  ngOnInit() {
    this.quoteRequest = JSON.parse(this._cdStorageService.getSessionStorageData('quoteRequest'));
    this.quoteResponse = JSON.parse(this._cdStorageService.getSessionStorageData('quote'));
    this.quoteResponse = this.dataSharedService.getQuoteData();
    //load types of buses.
  }

  getBooking() {
    //call logout service.
    console.log("getBooking");
    this.router.navigate(['/bookingConfirmation']);

  }

  getBusTypes(){

  }

}
