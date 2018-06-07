import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: 'about.component.html'
})

export class AboutComponent {

    public message: string;

    constructor() {
        this.message = 'Hello from AboutComponent constructor';
    }
}
