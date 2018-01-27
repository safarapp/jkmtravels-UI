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
var contactus_1 = require("../model/contactus");
var quote_request_1 = require("../model/quote.request");
var ContactUsComponent = (function () {
    /**
     *
     * @param router
     */
    function ContactUsComponent(router) {
        this.router = router;
        this.submitted = false;
    }
    /**
     *
     * Initial method for home
     */
    ContactUsComponent.prototype.ngOnInit = function () {
        this.quoteRequest = new quote_request_1.QuoteRequest();
        this.contactUs = new contactus_1.ContactUs();
    };
    /**
     *
     */
    ContactUsComponent.prototype.submit = function () {
        console.log(this.contactUs);
    };
    ContactUsComponent.prototype.submitForm = function (form) {
        console.log('Form Data: ');
        console.log(form);
    };
    ContactUsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contactus',
            templateUrl: 'contactus.component.html',
            styleUrls: ['../../css/contactus.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contactus.component.js.map