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

