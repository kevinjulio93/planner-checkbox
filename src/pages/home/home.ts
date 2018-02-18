import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    actions = [
        {title: 'Write Sales Script', subtitle: 'Earn 100,000/ month', color: '#99C179'},
        {title: 'Workout', subtitle: 'Lose 10lbs', color: '#FACB6E'},
        {title: 'Film Video', subtitle: 'Launch New Website', color: '#F2976C'}
    ];

    constructor(public navCtrl: NavController) {

    }

}
