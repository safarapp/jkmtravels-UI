import {Component} from "@angular/core";
import {Image} from "../model/image.interface";
/**
 * Created by Jkm Travels on 3/19/2017.
 */

@Component({
    selector: 'css-carousel',
    templateUrl: '/app/components/carousel/carousel.component.html'
})

//Carousel Component itself
export class CSSCarouselComponent {
    //images data to be bound to the template
    public images = IMAGES;
}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
    { "title": "Best in class vehicle for your travel", "url": "/app/images/varansi.jpg" },
    { "title": "Best in class vehicle for your travel", "url": "/app/images/varansi.jpg" },
    { "title": " We belive in treating our customers like our partners", "url": "/app/images/02.jpg" },
    { "title": "We are covered", "url": "/app/images/03.jpg" },
    { "title": "We are covered", "url": "/app/images/Harmandir-Sahib.jpg" }

    /*{ "title": "We are covered", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg" },
    { "title": "Generation Gap", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg" },
    { "title": "Potter Me", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg" },
    { "title": "Pre-School Kids", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg" },
    { "title": "Young Peter Cech", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg" }*/
];