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
var storage_service_1 = require("../../common/storage.service");
var datashared_service_1 = require("../../common/datashared.service");
var home_service_1 = require("../../home/home.service");
var HeaderComponent = (function () {
    function HeaderComponent(router, _cdStorageService, dataSharedService, loginService) {
        this.router = router;
        this._cdStorageService = _cdStorageService;
        this.dataSharedService = dataSharedService;
        this.loginService = loginService;
        this.authenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log("header init");
    };
    HeaderComponent.prototype.header = function () {
        console.log("header...");
    };
    HeaderComponent.prototype.clearSessiondata = function () {
        this._cdStorageService.removeSessionStorage('access-token');
        this._cdStorageService.removeSessionStorage('authenticated');
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: 'header.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, storage_service_1.StorageService, datashared_service_1.DataSharedService, home_service_1.HomeService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=header.component.js.map
