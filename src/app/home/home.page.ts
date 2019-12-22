
import { DOCUMENT } from '@angular/common';
import { HAMMER_GESTURE_CONFIG,Title } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
//import { NavController,NavParams } from '@ionic/angular';
import { Slides, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Router } from '@angular/router';
import { DetalhesPage } from '../detalhes/detalhes.page';

@IonicPage()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slider', { static: false}) slider: Slides;
  page = "0";
  itens=[]
    
  constructor(public nav: NavController, public param: NavParams) { 
    
  }

  selectedTab(index) {
    this.slider.slideTo(index);
  }

  moveButton($event) {
    this.page = $event._snapIndex.toString()
  }

   items = [
  {
    'title': 'Angular',
    'icon': 'angular',
    'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
    'color': '#E63135'
  },
  {
    'title': 'CSS3',
    'icon': 'css3',
    'description': 'The latest version of cascading stylesheets - the styling language of the web!',
    'color': '#0CA9EA'
  },
  {
    'title': 'HTML5',
    'icon': 'html5',
    'description': 'The latest version of the web\'s markup language.',
    'color': '#F46529'
  },
  {
    'title': 'JavaScript',
    'icon': 'javascript',
    'description': 'One of the most popular programming languages on the Web!',
    'color': '#FFD439'
  },
  {
    'title': 'Sass',
    'icon': 'sass',
    'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
    'color': '#CE6296'
  },
  {
    'title': 'NodeJS',
    'icon': 'nodejs',
    'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
    'color': '#78BD43'
  },
  {
    'title': 'Python',
    'icon': 'python',
    'description': 'A clear and powerful object-oriented programming language!',
    'color': '#3575AC'
  },
  {
    'title': 'Markdown',
    'icon': 'markdown',
    'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
    'color': '#412159'
  },
  {
    'title': 'Tux',
    'icon': 'tux',
    'description': 'The official mascot of the Linux kernel!',
    'color': '#000'
  },
];
  


openNavDetailsPage() {
  this.nav.push(DetalhesPage)
}
}


class MyApp {
  // set the rootPage to the first page we want displayed
  public rootPage: any = HomePage;

  constructor(){
  }
}


/* https://ionicframework.com/docs/v3/api/components/scroll/Scroll/ 
https://ionicframework.com/docs/components
https://ionicframework.com/docs/v3/components/#modals
https://ionicframework.com/docs/api/virtual-scroll#virtual-scroll-performance-tips*/
