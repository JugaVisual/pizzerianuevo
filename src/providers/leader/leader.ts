getLeaders(): Observable<Leader[]>{
	return this.http.get(dbURL + ‘leader’).map(
	res =>  res
)
}

getLeaders(id: number): Observable<Leader>{
	return this.http.get(dbURL + ‘leader/’ + id).map(
	res => res
)
}
getFeaturedLeaders(): Observable<Leader>{
	return this.http.get(dbURL + ‘leader?featured=true’).map(
	res => res
)
{ provide: ‘DbURL’, useValue: dbURL}

}
