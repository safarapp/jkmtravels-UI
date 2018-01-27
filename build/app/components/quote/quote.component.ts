import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {DataSharedService} from "../common/datashared.service";
import {StorageService} from "../common/storage.service";
import {QuoteRequest} from "../model/quote.request";
import {HomeService} from "../home/home.service";


@Component({
    moduleId: module.id,
    selector: 'quote-form',
    templateUrl: 'quote.component.html'

})

export class QuoteComponent implements OnInit {

    errorMessage: string;
    public submitted: boolean = false;
    @Input() quoteRequest: QuoteRequest;
    @ViewChild('quoteForm') quoteForm:any;

    /**
     *
      * @param homeService
     * @param router
     */
    constructor(private homeService: HomeService, private router : Router, private dataSharedService : DataSharedService,
                private _cdStorageService:StorageService) {
          this._cdStorageService.removeSessionStorage('authenticated');
    }


    /**
     *
     * Initial method for home
     */
    ngOnInit() {
        this.quoteRequest = new QuoteRequest();
    }

    getQuote() {
        //call logout service.
        console.log(this.quoteRequest);
        this.homeService.getQuote(this.quoteRequest).then(
            responseData => {
                this._cdStorageService.setSessionStorage('quoteRequest', JSON.stringify(this.quoteRequest));
                //this._cdStorageService.setSessionStorage('quote', JSON.stringify(responseData));
                this.dataSharedService.setQuoteData(responseData);
                console.log('logout success');
                this.router.navigate(['/busSearch']);
            },
            error => {
                console.log('logout failure');
                this.errorMessage = error;
            }
        );
    }

}
