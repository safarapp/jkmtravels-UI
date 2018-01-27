import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";
import {QuoteResponse} from "../model/quote.response";


@Injectable()
export class DataSharedService {

    constructor(private _cdStorageService:StorageService) {

    }

    title = { value: '' };

    quoteResponse: QuoteResponse[];

    isAuthenticated(){
        return this._cdStorageService.getSessionStorageData('authenticated');
    }

    setQuoteData(quoteResponse: QuoteResponse[]){
        this. quoteResponse = quoteResponse;
    }

    getQuoteData(){
        return this.quoteResponse;
    }
}
