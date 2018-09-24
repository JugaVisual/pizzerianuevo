import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DishProvider } from '../../providers/dish/dish';
import { LeaderProvider } from '../../providers/dish/leader';
import { PromotionProvider } from '../../providers/dish/promotion';

import { Dish } from '../../providers/dish/dish';
import { Leader} from '../../providers/dish/leader';
import { Promotion } from '../../providers/dish/promotion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  getFeaturedDish(){
  this.dishService
  .getFeaturedDish()
  .suscribe(
  response => {
  this.dish = response[0];
  console.log(this.dish);
  },
  error =>{
  console.log(error);
   }
  );

}

  }

  getFeaturedLeaders(){
  this.dishService
  .getFeaturedLeaders()
  .suscribe(
  response => {
  this.leader = response[0];
  console.log(this.leader);
  },
  error =>{
  console.log(error);
   }
  );

}

  }

  getFeaturedPromotions(){
  this.dishService
  .getFeaturedPromotions()
  .suscribe(
  response => {
  this.promotions = response[0];
  console.log(this.promotion);
  },
  error =>{
  console.log(error);
   }
  );

	}
		}
			}