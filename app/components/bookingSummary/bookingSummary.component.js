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
var storage_service_1 = require("../common/storage.service");
var BusSearchComponent = (function () {
    /**
     *
     * @param router
     */
    function BusSearchComponent(router, _cdStorageService) {
        this.router = router;
        this._cdStorageService = _cdStorageService;
    }
    /**
     *
     * Initial method for home
     */
    BusSearchComponent.prototype.ngOnInit = function () {
        this.quoteRequest = JSON.parse(this._cdStorageService.getSessionStorageData('quoteRequest'));
        this.quoteResponse = JSON.parse(this._cdStorageService.getSessionStorageData('quote'));
    };
    BusSearchComponent.prototype.select = function () {
        var _this = this;
        console.log("select");
        //call logout service.
        console.log(this.quoteRequest);
        this.homeService.getQuote(this.quoteRequest).then(function (responseData) {
            _this._cdStorageService.setSessionStorage('quoteRequest', JSON.stringify(_this.quoteRequest));
            _this._cdStorageService.setSessionStorage('quote', JSON.stringify(responseData));
            console.log('logout success');
            _this.router.navigate(['/busSearch']);
        }, function (error) {
            console.log('logout failure');
            _this.router.navigate(['/busSearch']);
        });
    };
    BusSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingSummary',
            templateUrl: 'bookingSummary.component.html',
            styleUrls: ['../../css/bussearch.css', '../../css/font-awesome.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, storage_service_1.StorageService])
    ], BusSearchComponent);
    return BusSearchComponent;
}());
exports.BusSearchComponent = BusSearchComponent;
//# sourceMappingURL=bookingSummary.component.js.map