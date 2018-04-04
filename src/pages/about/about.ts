import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageonePage } from '../pageone/pageone';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goOne() {
    this.navCtrl.push('PageonePage');
  }

}
