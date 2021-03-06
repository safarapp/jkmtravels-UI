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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng2_slimscroll_1 = require('ng2-slimscroll');
var ng2_datepicker_component_1 = require('./ng2-datepicker.component');
var ng2_datepicker_component_2 = require('./ng2-datepicker.component');
exports.DatePickerOptions = ng2_datepicker_component_2.DatePickerOptions;
exports.DateModel = ng2_datepicker_component_2.DateModel;
var DatePickerModule = (function () {
    function DatePickerModule() {
    }
    DatePickerModule = __decorate([
        core_1.NgModule({
            declarations: [
                ng2_datepicker_component_1.DatePickerComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng2_slimscroll_1.SlimScrollModule
            ],
            exports: [
                ng2_datepicker_component_1.DatePickerComponent,
                ng2_slimscroll_1.SlimScrollModule,
                forms_1.FormsModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DatePickerModule);
    return DatePickerModule;
}());
exports.DatePickerModule = DatePickerModule;
//# sourceMappingURL=ng2-datepicker.module.js.map