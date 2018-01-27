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
var router_1 = require("@angular/router");
var datashared_service_1 = require("../common/datashared.service");
var storage_service_1 = require("../common/storage.service");
var quote_request_1 = require("../model/quote.request");
var home_service_1 = require("../home/home.service");
var QuoteComponent = (function () {
    /**
     *
      * @param homeService
     * @param router
     */
    function QuoteComponent(homeService, router, dataSharedService, _cdStorageService) {
        this.homeService = homeService;
        this.router = router;
        this.dataSharedService = dataSharedService;
        this._cdStorageService = _cdStorageService;
        this.submitted = false;
        this._cdStorageService.removeSessionStorage('authenticated');
    }
    /**
     *
     * Initial method for home
     */
    QuoteComponent.prototype.ngOnInit = function () {
        this.quoteRequest = new quote_request_1.QuoteRequest();
    };
    QuoteComponent.prototype.getQuote = function () {
        var _this = this;
        //call logout service.
        console.log(this.quoteRequest);
        this.homeService.getQuote(this.quoteRequest).then(function (responseData) {
            _this._cdStorageService.setSessionStorage('quoteRequest', JSON.stringify(_this.quoteRequest));
            //this._cdStorageService.setSessionStorage('quote', JSON.stringify(responseData));
            _this.dataSharedService.setQuoteData(responseData);
            console.log('logout success');
            _this.router.navigate(['/busSearch']);
        }, function (error) {
            console.log('logout failure');
            _this.errorMessage = error;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', quote_request_1.QuoteRequest)
    ], QuoteComponent.prototype, "quoteRequest", void 0);
    __decorate([
        core_1.ViewChild('quoteForm'), 
        __metadata('design:type', Object)
    ], QuoteComponent.prototype, "quoteForm", void 0);
    QuoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'quote-form',
            templateUrl: 'quote.component.html'
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.Router, datashared_service_1.DataSharedService, storage_service_1.StorageService])
    ], QuoteComponent);
    return QuoteComponent;
}());
exports.QuoteComponent = QuoteComponent;

//# sourceMappingURL=quote.component.js.map
