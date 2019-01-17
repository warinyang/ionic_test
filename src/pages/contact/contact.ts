import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  cName: string;
  cWebsite: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {  //รับข้อมูลด้วย navParams 
    this.cName = this.navParams.get('companyName');
    this.cWebsite = this.navParams.get('companyWebsite');  //และนำข้อมูลพวกนี้ไปแสดงที่เว็บไซต์
    // เป็นการ binding
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
