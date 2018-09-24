getDishes(): Observable<Dish[]>{
	return this.http.get(dbURL + ‘dishes’).map(
	res =>  res
)
}

getDish(id: number): Observable<Dish>{
	return this.http.get(dbURL + ‘dishes/’ + id).map(
	res => res
)
}
getFeaturedDish(): Observable<Dish>{
	return this.http.get(dbURL + ‘dishes?featured=true’).map(
	res => res
)
{ provide: ‘DbURL’, useValue: dbURL}

}
