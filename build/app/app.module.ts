import "./rxjs-extensions";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {HeaderComponent} from "./components/shared/header/header.component";
import {FooterComponent} from "./components/shared/footer/footer.component";
import {TitlePage} from "./components/shared/title/pagetitle.component";
import {StorageService} from "./components/common/storage.service";
import {DataSharedService} from "./components/common/datashared.service";
import {HomeComponent} from "./components/home/home.component";
import {HomeService} from "./components/home/home.service";
import {ServicesComponent} from "./components/services/services.component";
import {AboutUsComponent} from "./components/aboutus/aboutus.component";
import {ContactUsComponent} from "./components/contactus/contactus.component";
import {BusSearchComponent} from "./components/busSearch/busSearch.component";
import {CSSCarouselComponent} from "./components/carousel/carousel.component";
import {BookingConfirmationComponent} from "./components/bookingConfirmation/bookingConfirmation.component";
import {TimeMask} from "./directive/time.directive";
import {OnlyDigits} from "./directive/onlydigits.directive";
import {QuoteComponent} from "./components/quote/quote.component";
import {EmailValidator} from "./directive/email.validator";
import {JKMHttpClient} from "./components/common/jkmhttpclient.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, TitlePage, HomeComponent, ServicesComponent, AboutUsComponent, ContactUsComponent, BusSearchComponent,
        CSSCarouselComponent, BookingConfirmationComponent, TimeMask, OnlyDigits, QuoteComponent, EmailValidator
    ],
    providers: [
        JKMHttpClient, StorageService, DataSharedService, HomeService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}

