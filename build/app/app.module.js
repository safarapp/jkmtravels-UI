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
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var header_component_1 = require("./components/shared/header/header.component");
var footer_component_1 = require("./components/shared/footer/footer.component");
var pagetitle_component_1 = require("./components/shared/title/pagetitle.component");
var storage_service_1 = require("./components/common/storage.service");
var datashared_service_1 = require("./components/common/datashared.service");
var home_component_1 = require("./components/home/home.component");
var home_service_1 = require("./components/home/home.service");
var services_component_1 = require("./components/services/services.component");
var aboutus_component_1 = require("./components/aboutus/aboutus.component");
var contactus_component_1 = require("./components/contactus/contactus.component");
var busSearch_component_1 = require("./components/busSearch/busSearch.component");
var carousel_component_1 = require("./components/carousel/carousel.component");
var bookingConfirmation_component_1 = require("./components/bookingConfirmation/bookingConfirmation.component");
var time_directive_1 = require("./directive/time.directive");
var onlydigits_directive_1 = require("./directive/onlydigits.directive");
var quote_component_1 = require("./components/quote/quote.component");
var email_validator_1 = require("./directive/email.validator");
var jkmhttpclient_service_1 = require("./components/common/jkmhttpclient.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, pagetitle_component_1.TitlePage, home_component_1.HomeComponent, services_component_1.ServicesComponent, aboutus_component_1.AboutUsComponent, contactus_component_1.ContactUsComponent, busSearch_component_1.BusSearchComponent,
                carousel_component_1.CSSCarouselComponent, bookingConfirmation_component_1.BookingConfirmationComponent, time_directive_1.TimeMask, onlydigits_directive_1.OnlyDigits, quote_component_1.QuoteComponent, email_validator_1.EmailValidator
            ],
            providers: [
                jkmhttpclient_service_1.JKMHttpClient, storage_service_1.StorageService, datashared_service_1.DataSharedService, home_service_1.HomeService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map