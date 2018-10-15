import {HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { dbURL } from "../../shared/dburl";
import "rxjs/add/operator/map";
import { Leader } from "../../shared/leader";

@Injectable()
export class LeaderProvider {

	constructor(public http: HttpClient) {
		console.log("Hello Leader Provider");
	}

	getLeaders(): Observable<Leader[]>{
		return this.http.get<Leader[]>(dbURL + "leaders").map(
			res =>  res
		)
	}

	getLeader(id: number): Observable<Leader>{	
		return this.http.get<Leader>(dbURL + "leaders/" + id).map(
			res => res
		)
	}
	getFeaturedLeader(): Observable<Leader>{
		return this.http.get<Leader>(dbURL + "leaders?featured=true").map(
			res => res
		)
	}
}
