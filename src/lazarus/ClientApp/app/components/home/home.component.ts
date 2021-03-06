import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

import { ConfigurationService } from '../../services/configuration.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fadeInOut]
})
export class HomeComponent {
    constructor(private configurations: ConfigurationService) {
    }
}
