import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../shared/services/environment.service';
import { userLoginForm, userModel, userSignupForm } from '../interfaces';
import { Observable, catchError, retry, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private http : HttpClient,
    public env : EnvironmentService
  ) { }



  login(body: userLoginForm):Observable<userModel> {
    let api = `${this.env.users}/api/Account/Login`
    return this.http.post<userModel>(api, body).pipe(retry(3), take(1), catchError(err=>{console.log(err);throw err})
    )
  }

  signup(body: userSignupForm):Observable<userModel> {
    let api = `${this.env.users}/api/Account/Register`
    return this.http.post<userModel>(api, body).pipe(retry(3), take(1), catchError(err=>{console.log(err);throw err})
    )
  }
}
