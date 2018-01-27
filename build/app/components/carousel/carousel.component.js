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
/**
 * Created by Jkm Travels on 3/19/2017.
 */
var CSSCarouselComponent = (function () {
    function CSSCarouselComponent() {
        //images data to be bound to the template
        this.images = IMAGES;
    }
    CSSCarouselComponent = __decorate([
        core_1.Component({
            selector: 'css-carousel',
            templateUrl: '/app/components/carousel/carousel.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CSSCarouselComponent);
    return CSSCarouselComponent;
}());
exports.CSSCarouselComponent = CSSCarouselComponent;
//IMAGES array implementing Image interface
var IMAGES = [
    { "title": "Best in class vehicle for your travel", "url": "/app/images/varansi.jpg" },
    { "title": "Best in class vehicle for your travel", "url": "/app/images/varansi.jpg" },
    { "title": " We belive in treating our customers like our partners", "url": "/app/images/02.jpg" },
    { "title": "We are covered", "url": "/app/images/03.jpg" },
    { "title": "We are covered", "url": "/app/images/Harmandir-Sahib.jpg" }
];
//# sourceMappingURL=carousel.component.js.map