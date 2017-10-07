import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  WooCommerce: any;
  products: any[];

  constructor(public navCtrl: NavController) {

    this.WooCommerce =WC({
      url:"http://localhost/wordpress",
      consumerKey: "ck_8d3cc59b0b0d6dc2f30202dbcf9997ca1f5e859c",
      consumerSecret: "cs_00b296fd1ef72c84dff53302a9e3d66948cbc883"

    });
    this.WooCommerce.getAsync("products").then( (data) =>{
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    },(err)=>{
      console.log(err)   

    }) 

  }

}
