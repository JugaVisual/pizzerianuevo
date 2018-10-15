import {HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { dbURL } from "../../shared/dburl";
import "rxjs/add/operator/map";
import { Dish } from "../../shared/dish";


@Injectable()
export class DishProvider {

	constructor(public http: HttpClient) {
		console.log("Hello Dish Provider");
	}


	getDishes(): Observable<Dish[]>{
		return this.http.get <Dish[]>(dbURL + "dishes").map(
			res =>  res
		);
	}

	getDish(id: number): Observable<Dish>{
		return this.http.get<Dish>(dbURL + "dishes/" + id).map(
			res => res
		)
	}
	getFeaturedDish(): Observable<Dish>{
		return this.http.get<Dish>(dbURL + 'dishes?featured=true').map(
			res => res
		)
	}
}
