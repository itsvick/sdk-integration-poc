import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppConfig, customConfig } from './config';
import * as player from '../../../node_modules/@project-sunbird/content-player';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    let previewElement = document.getElementById('preview');
    previewElement.onload = function () {
      console.log('previewElement Loaded', previewElement);
      previewElement['contentWindow'].initializePreview(customConfig);
    }
  }
}
