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
var forms_1 = require("@angular/forms");
var OnlyDigits = (function () {
    function OnlyDigits(model) {
        this.model = model;
    }
    OnlyDigits.prototype.onInputChange = function () {
        this.modelValue = this.getModelValue();
        console.log('input change ' + this.modelValue);
        if (!this.modelValue)
            return;
        this.modelValue = this.modelValue.replace(/\D/g, '');
        this.model.viewToModelUpdate(this.modelValue);
        this.model.valueAccessor.writeValue(this.modelValue);
    };
    OnlyDigits.prototype.getModelValue = function () {
        var modelValue = this.model.value;
        return modelValue;
    };
    OnlyDigits = __decorate([
        core_1.Directive({
            selector: '[onlydigits]',
            host: {
                '(keyup)': 'onInputChange()'
            }
        }), 
        __metadata('design:paramtypes', [forms_1.NgModel])
    ], OnlyDigits);
    return OnlyDigits;
}());
exports.OnlyDigits = OnlyDigits;
//# sourceMappingURL=onlydigits.directive.js.map