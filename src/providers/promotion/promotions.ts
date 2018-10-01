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


getPromotions(): Observable<Promotions[]>{
	return this.http.get(dbURL + ‘promotion’).map(
	res =>  res
)
}

getPromotions(id: number): Observable<Promotions>{
	return this.http.get(dbURL + ‘promotion/’ + id).map(
	res => res
)
}
getFeaturedPromotions(): Observable<Promotions>{
	return this.http.get(dbURL + ‘promotion?featured=true’).map(
	res => res
)
{ provide: ‘DbURL’, useValue: dbURL}

}

