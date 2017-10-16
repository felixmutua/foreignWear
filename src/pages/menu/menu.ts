import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import * as WC from 'woocommerce-api';


 
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homePage: Component;
  WooCommerce: any;
  categories: any[];
  


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
    this.categories=[];

    this.WooCommerce =WC({
      url:"http://localhost/wordpress",
      consumerKey: "ck_8d3cc59b0b0d6dc2f30202dbcf9997ca1f5e859c",
      consumerSecret: "cs_00b296fd1ef72c84dff53302a9e3d66948cbc883"

    });


    this.WooCommerce.getAsync("products/categories").then( (data) =>{
      console.log(JSON.parse(data.body).product_categories);

      let temp: any[]=JSON.parse(data.body).product_categories;

      for(let i=0;i<temp.length;i++){
        if(temp[i].parent==0){

          if(temp[i].slug=="accessories"){
            temp[i].icon="key";
          }
          if(temp[i].slug=="music"){
            temp[i].icon="musical-notes";
          }
          if(temp[i].slug=="clothing"){
            temp[i].icon="shirt";
          }
          if(temp[i].slug=="shoes"){
            temp[i].icon="cash";
          }
          if(temp[i].slug=="bags"){
            temp[i].icon="pricetag";
          }
          this.categories.push(temp[i]);
        }
      }
 
    },(err)=>{
      console.log(err)   

    }) 
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
