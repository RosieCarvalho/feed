import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';
import { DOCUMENT } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
@IonicPage()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slider', { static: false }) slider: Slides;
  page = "0";

  constructor(public navCtrl:NavController, public nav) { }

  selectedTab(index) {
    this.slider.slideTo(index);
  }

  moveButton(event) {
    this.page = event._snapIndex.toString()
  }
}
