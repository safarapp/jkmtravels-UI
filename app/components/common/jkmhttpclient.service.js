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
var http_1 = require("@angular/http");
var storage_service_1 = require("./storage.service");
require("../../rxjs-extensions");
var JKMHttpClient = (function () {
    /**
     *
     * @param http
     * @param _config
     * @param _mpstorage
     */
    function JKMHttpClient(http, _cdstorage) {
        this.http = http;
        this._cdstorage = _cdstorage;
        this.ACCESS_TOKEN_HEADER = 'Access-Token';
        this.ACCESS_TOKEN_HEADER2 = 'access-token';
    }
    /**
     *
     * @param headers
     */
    JKMHttpClient.prototype.createAuthorizationHeader = function (headers) {
        console.log("Create Authorization Header");
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this._cdstorage.getSessionStorageData(this.ACCESS_TOKEN_HEADER2));
    };
    /**
     *
     * @param url
     * @returns {any}
     */
    JKMHttpClient.prototype.get = function (url) {
        var _this = this;
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        url = url + '?t=' + Date.now();
        return new Promise(function (resolve, reject) {
            _this.http.get(url, {
                headers: headers
            }).toPromise().then(function (resp) {
                resolve(resp);
            }, function (err) {
                _this.handleError(err);
                reject(err);
            });
        });
    };
    /**
     *
     * @param url
     * @param options
     * @returns {any}
     */
    JKMHttpClient.prototype.getWithOptions = function (url, options) {
        var _this = this;
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        options.headers = headers;
        return new Promise(function (resolve, reject) {
            _this.http.get(url, options).toPromise().then(function (resp) {
                resolve(resp);
            }, function (err) {
                _this.handleError(err);
                reject(err);
            });
        });
    };
    /**
     *
     * @param url
     * @param data
     * @returns {any}
     */
    JKMHttpClient.prototype.post = function (url, data) {
        var _this = this;
        url = url + '?t=' + Date.now();
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, {
                headers: headers
            }).toPromise().then(function (resp) {
                _this.saveAuthTokenHeader(resp);
                resolve(resp);
            }, function (err) {
                _this.handleError(err);
                reject(err);
            });
        });
    };
    /**
     *
     * @param url
     * @param data
     * @returns {any}
     */
    JKMHttpClient.prototype.put = function (url, data) {
        var _this = this;
        url = url + '?t=' + Date.now();
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return new Promise(function (resolve, reject) {
            _this.http.put(url, data, {
                headers: headers
            }).toPromise().then(function (resp) {
                resolve(resp);
            }, function (err) {
                _this.handleError(err);
                reject(err);
            });
        });
    };
    JKMHttpClient.prototype.saveAuthTokenHeader = function (response) {
        var accessToken = response.headers.toJSON()[this.ACCESS_TOKEN_HEADER2];
        if (!accessToken) {
            accessToken = response.headers.toJSON()[this.ACCESS_TOKEN_HEADER];
        }
        if (accessToken) {
            this._cdstorage.setSessionStorage(this.ACCESS_TOKEN_HEADER2, accessToken);
        }
    };
    JKMHttpClient.prototype.handleError = function (error) {
        console.log("Handle error");
        if (error && error.headers.toJSON()[this.ACCESS_TOKEN_HEADER]) {
            console.log('error');
        }
        else {
            console.log('error');
        }
    };
    JKMHttpClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, storage_service_1.StorageService])
    ], JKMHttpClient);
    return JKMHttpClient;
}());
exports.JKMHttpClient = JKMHttpClient;
//# sourceMappingURL=jkmhttpclient.service.js.map