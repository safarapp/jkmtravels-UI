import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DataSharedService} from "../common/datashared.service";
import {StorageService} from "../common/storage.service";





@Component({
    moduleId: module.id,
    selector: 'bookingConfirmation',
    templateUrl: 'bookingConfirmation.component.html',
    styleUrls: ['../../css/bussearch.css', '../../css/font-awesome.css']

})

export class BookingConfirmationComponent implements OnInit {

    errorMessage: string;

    /**
     *
     * @param homeService
     * @param router
     */
    constructor(private router : Router, private dataSharedService : DataSharedService,
                private _cdStorageService:StorageService) {
        this._cdStorageService.removeSessionStorage('authenticated');

    }


    /**
     *
     * Initial method for home
     */
    ngOnInit() {

    }

    getBooking() {
        //call logout service.
        console.log("getBooking");
        this.router.navigate(['/bookingConfirmation']);

    }


}
