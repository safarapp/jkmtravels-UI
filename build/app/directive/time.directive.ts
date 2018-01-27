import {Directive, Output, EventEmitter, Input} from '@angular/core';
import {NgModel} from "@angular/forms";

@Directive({
    selector: '[ngModel][time]',
    host: {
        '(input)' : 'onInputChange()',
        '(ngModelChange)': 'onInputChange($event)',
        '(keydown.backspace)':'onInputChange($event.target.value, true)'
    }
})

export class TimeMask {
    constructor(public model:NgModel) {}

    @Output() rawChange:EventEmitter<string> = new EventEmitter<string>();
   

    onInputChange(event:any, backspace:any) {


        if(event){

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
                } else if (newVal.length <= 4) {
                    newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1:$2');
                }
                // set the new value
                this.model.valueAccessor.writeValue(newVal);
                this.rawChange.emit(rawValue)
            }


    }
}