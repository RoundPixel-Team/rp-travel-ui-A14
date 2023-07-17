import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../shared/services/environment.service';
import { searchFlightModel } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchBoxApiService {

  constructor(
    private http : HttpClient,
    public env : EnvironmentService
  ) { }
}
