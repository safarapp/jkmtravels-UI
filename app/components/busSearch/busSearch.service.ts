import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {JKMHttpClient} from "../common/jkmhttpclient.service";
import {Response} from "@angular/http";
import {Configuration} from "../../config/app.constants";
import {QuoteRequest} from "../model/quote.request";

@Injectable()
export class BusSearchService {

    constructor(private _cdhttp: JKMHttpClient) {

    }

    /**
     *
     * @param loginRequest
     * @returns {Promise<void>|Promise<any|Request>}
     */
    getQuote(quoteRequest:QuoteRequest) {
        // let URL = Configuration.APP_URL + '/quote';
        let URL = "http://localhost:8080/quote";
        return this._cdhttp.post(URL, JSON.stringify(quoteRequest))
            .then(function(response:Response) {
                let headers = response.headers;
                return response.json();
            }, function(error) {
                let errMsg = (error._body) ? error._body :
                    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                console.error(errMsg); // log to console instead
                return Promise.reject(errMsg);
            });
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return res.json();
    }

    /**
     *
     * @param error
     * @returns {Promise<void>|Promise<T>}
     */
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errorMsg = JSON.parse(error._body);
        let errMsg = errorMsg.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };

}