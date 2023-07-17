import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../shared/services/environment.service';
import { searchFlightModel } from '../../flight-search-box/interfaces';
import { FlightSearchResult } from '../interfaces';
import { catchError, retry, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightResultsApiService {

  constructor(
    private http : HttpClient,
    public env : EnvironmentService
  ) { }

  searchFlight(searchFlight: searchFlightModel) {
    let api: string = `${this.env.searchflow}/flights/flightsSearch/
    ${searchFlight.lan}/
    ${searchFlight.currency}/
    ${searchFlight.pointOfReservation}/
    ${searchFlight.flightType}/
    ${searchFlight.flightsInfo}/
    ${searchFlight.passengers}/
    ${searchFlight.Cclass}/
    ${searchFlight.showDirect}/
    all/0/0/Direct?searchID=${searchFlight.serachId}`;
    return this.http.get<FlightSearchResult>(api).pipe(retry(2), take(1),catchError(err=>{console.log(err);throw err}) );;
  }
}
