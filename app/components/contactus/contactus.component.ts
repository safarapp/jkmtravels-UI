import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ContactUs} from "../model/contactus";
import {QuoteRequest} from "../model/quote.request";

@Component({
    moduleId: module.id,
    selector: 'contactus',
    templateUrl: 'contactus.component.html',
    styleUrls: ['../../css/contactus.css']
})

export class ContactUsComponent implements OnInit {

    errorMessage: string;
    quoteRequest:QuoteRequest;
    public submitted: boolean = false;
    contactUs:ContactUs;
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
        this.contactUs = new ContactUs();
    }

    /**
     *
     */
    submit(){
        console.log(this.contactUs);
    }

    submitForm(form: any): void{
        console.log('Form Data: ');
        console.log(form);
    }
}
