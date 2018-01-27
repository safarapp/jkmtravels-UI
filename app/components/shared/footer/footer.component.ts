import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.html',
    styleUrls: ['../../../css/footer.css'],
})

export class FooterComponent implements OnInit {

    constructor( ) {

    }

    ngOnInit() {
        console.log('in footer...');
    }

    footer() {

    }
}
