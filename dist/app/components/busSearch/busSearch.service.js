"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var jkmhttpclient_service_1 = require("../common/jkmhttpclient.service");
var BusSearchService = (function () {
    function BusSearchService(_cdhttp) {
        this._cdhttp = _cdhttp;
    }
    /**
     *
     * @param loginRequest
     * @returns {Promise<void>|Promise<any|Request>}
     */
    BusSearchService.prototype.getQuote = function (quoteRequest) {
        // let URL = Configuration.APP_URL + '/quote';
        var URL = "http://localhost:8080/quote";
        return this._cdhttp.post(URL, JSON.stringify(quoteRequest))
            .then(function (response) {
            var headers = response.headers;
            return response.json();
        }, function (error) {
            var errMsg = (error._body) ? error._body :
                error.status ? error.status + " - " + error.statusText : 'Server error';
            console.error(errMsg); // log to console instead
            return Promise.reject(errMsg);
        });
    };
    BusSearchService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return res.json();
    };
    /**
     *
     * @param error
     * @returns {Promise<void>|Promise<T>}
     */
    BusSearchService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errorMsg = JSON.parse(error._body);
        var errMsg = errorMsg.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    ;
    BusSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [jkmhttpclient_service_1.JKMHttpClient])
    ], BusSearchService);
    return BusSearchService;
}());
exports.BusSearchService = BusSearchService;

//# sourceMappingURL=busSearch.service.js.map
