import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {QuoteRequest} from "../model/quote.request";

@Component({
    moduleId: module.id,
    selector: 'aboutus',
    templateUrl: 'aboutus.component.html',
    styleUrls: ['../../css/aboutus.css', '../../css/font-awesome.css']
})

export class AboutUsComponent implements OnInit {

    errorMessage: string;
    quoteRequest:QuoteRequest;
    public submitted: boolean = false;

    /**
     *
     * @param router
     */
    constructor(private router : Router) {

    }


    /**
     *
     * Initial method for home
     */
    ngOnInit() {
        this.quoteRequest = new QuoteRequest();
    }
}
