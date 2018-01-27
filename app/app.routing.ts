import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ServicesComponent} from "./components/services/services.component";
import {AboutUsComponent} from "./components/aboutus/aboutus.component";
import {ContactUsComponent} from "./components/contactus/contactus.component";
import {BusSearchComponent} from "./components/busSearch/busSearch.component";
import {BookingConfirmationComponent} from "./components/bookingConfirmation/bookingConfirmation.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: 'services', component:  ServicesComponent},
    {path: 'aboutus', component: AboutUsComponent },
    {path: 'contactus', component: ContactUsComponent },
    {path: 'busSearch', component: BusSearchComponent },
    {path: 'bookingConfirmation', component: BookingConfirmationComponent},
    {path: '*', redirectTo: '/home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });