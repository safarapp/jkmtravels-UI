import {Directive} from "@angular/core";
import {NgModel} from "@angular/forms";

@Directive({
    selector: '[onlydigits]',
    host: {
        '(keyup)' : 'onInputChange()'
    }
})


export class OnlyDigits{
    modelValue: string;
    viewValue: string;

    constructor(public model:NgModel) {
    }

    onInputChange(){
        this.modelValue = this.getModelValue();
        console.log('input change ' + this.modelValue);
        if (! this.modelValue) return;
        this.modelValue = this.modelValue.replace(/\D/g, '');
        this.model.viewToModelUpdate(this.modelValue);
        this.model.valueAccessor.writeValue(this.modelValue);

    }

    getModelValue(){
        var modelValue = this.model.value;
        return modelValue;
    }
}