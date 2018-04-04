import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagetwoPage } from '../pagetwo/pagetwo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTwo() {
    this.navCtrl.push('PagetwoPage');
  }

}
