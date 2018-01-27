import {Component, ViewContainerRef, OnInit, ViewChild, OnDestroy} from "@angular/core";


import "rxjs/Rx";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html'
})


export class AppComponent implements OnInit, OnDestroy {

    showHeader: boolean = true;
    envData: any;

    public constructor(public viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }

    close() {
        let win = window.open('about:blank', '_self');
        win.close();
    }

    ngOnInit() {
        console.log('init');
   }

    ngOnDestroy() {
        console.log('destroy');
    }
}
