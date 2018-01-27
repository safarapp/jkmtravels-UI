"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var services_component_1 = require("./components/services/services.component");
var aboutus_component_1 = require("./components/aboutus/aboutus.component");
var contactus_component_1 = require("./components/contactus/contactus.component");
var busSearch_component_1 = require("./components/busSearch/busSearch.component");
var bookingConfirmation_component_1 = require("./components/bookingConfirmation/bookingConfirmation.component");
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'aboutus', component: aboutus_component_1.AboutUsComponent },
    { path: 'contactus', component: contactus_component_1.ContactUsComponent },
    { path: 'busSearch', component: busSearch_component_1.BusSearchComponent },
    { path: 'bookingConfirmation', component: bookingConfirmation_component_1.BookingConfirmationComponent },
    { path: '*', redirectTo: '/home' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=app.routing.js.map
