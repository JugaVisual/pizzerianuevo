import {HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { dbURL } from "../../shared/dburl";
import "rxjs/add/operator/map";
import { Promotion } from "../../shared/promotion";

@Injectable()
export class PromotionProvider {

	constructor(public http: HttpClient) {
		console.log("Hello Promotion Provider");
	}


getPromotions(): Observable<Promotion[]>{
	return this.http.get<Promotion[]>(dbURL + "promotions").map(
	res =>  res
)
}
getFeaturedPromotions(): Observable<Promotion>{
	return this.http.get<Promotion>(dbURL + "promotions?featured=true").map(
	res => res
)
}
//{ provide: ‘DbURL’, useValue: dbURL}

}

