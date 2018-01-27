import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {StorageService} from "../../common/storage.service";
import {DataSharedService} from "../../common/datashared.service";
import {HomeService} from "../../home/home.service";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.html'
})

export class HeaderComponent implements OnInit {

    authenticated:boolean=false;

    constructor(private router : Router,
                private _cdStorageService:StorageService,
                private dataSharedService : DataSharedService,
                private loginService : HomeService) {}

    ngOnInit() {
        console.log("header init");
    }

    header(){
        console.log("header...");
    }

    clearSessiondata(){
        this._cdStorageService.removeSessionStorage('access-token');
        this._cdStorageService.removeSessionStorage('authenticated');
    }
}
