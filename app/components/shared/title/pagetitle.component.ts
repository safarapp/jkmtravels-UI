import {Component} from "@angular/core";
import {DataSharedService} from "../../common/datashared.service";

@Component({
    moduleId: module.id,
    selector: 'title-page',
    template: `<span>{{title.value}}</span>`,
})
export class TitlePage {

    title = { value: 'Home' };

    constructor(private _configService:DataSharedService) {
    }

    ngOnInit() {
        this.title = this._configService.title;
        console.log(this.title);
    }
}