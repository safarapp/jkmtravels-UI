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
var quote_request_1 = require("../model/quote.request");
var AboutUsComponent = (function () {
    /**
     *
     * @param router
     */
    function AboutUsComponent(router) {
        this.router = router;
        this.submitted = false;
    }
    /**
     *
     * Initial method for home
     */
    AboutUsComponent.prototype.ngOnInit = function () {
        this.quoteRequest = new quote_request_1.QuoteRequest();
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'aboutus',
            templateUrl: 'aboutus.component.html',
            styleUrls: ['../../css/aboutus.css', '../../css/font-awesome.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
//# sourceMappingURL=aboutus.component.js.map