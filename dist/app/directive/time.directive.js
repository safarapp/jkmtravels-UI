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
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var TimeMask = (function () {
    function TimeMask(model) {
        this.model = model;
        this.rawChange = new core_1.EventEmitter();
    }
    TimeMask.prototype.onInputChange = function (event, backspace) {
        if (event) {
            var length = event.length;
            var newVal = event.replace(/\D/g, '');
            var rawValue = newVal;
            if (backspace) {
                newVal = newVal.substring(0, newVal.length - 1);
            }
            if (newVal.length == 0) {
                newVal = '';
            }
            else if (newVal.length <= 2) {
                newVal = newVal.replace(/^(\d{0,2})/, '$1');
            }
            else if (newVal.length <= 4) {
                newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1:$2');
            }
            // set the new value
            this.model.valueAccessor.writeValue(newVal);
            this.rawChange.emit(rawValue);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TimeMask.prototype, "rawChange", void 0);
    TimeMask = __decorate([
        core_1.Directive({
            selector: '[ngModel][time]',
            host: {
                '(input)': 'onInputChange()',
                '(ngModelChange)': 'onInputChange($event)',
                '(keydown.backspace)': 'onInputChange($event.target.value, true)'
            }
        }), 
        __metadata('design:paramtypes', [forms_1.NgModel])
    ], TimeMask);
    return TimeMask;
}());
exports.TimeMask = TimeMask;

//# sourceMappingURL=time.directive.js.map
