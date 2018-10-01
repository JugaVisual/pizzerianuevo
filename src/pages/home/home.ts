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
  
  dish:Dish;
  leader:Leader;
  promotions:Promotion;

  constructor(public navCtrl: NavController,
    private dishService: DishProvider,
    private LeaderService: LeaderProvider,
    private promotionService: PromotionProvider,
    @Inject("DbURL") private dbURL ){

  }
   ngOnInit(){
    this.getFeaturedDish();
    this.getFeaturedLeaders();
    this.getFeaturedPromotions();
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

  

  getFeaturedLeaders(){
  this.leaderService
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

  

  getFeaturedPromotions(){
  this.promotionService
  .getFeaturedPromotions()
  .suscribe(
  response => {
  this.promotion = response[0];
  console.log(this.promotion);
  },
  error =>{
  console.log(error);
   }
  );

	}
}
		
		