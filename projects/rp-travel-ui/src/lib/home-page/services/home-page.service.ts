import { Inject, Injectable, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeApiService } from './home-api.service';
import { currencyModel } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  subscription : Subscription = new Subscription()

  currencies : currencyModel[] = []

  constructor(
    public api : HomeApiService
  ) { 
  }



  /**
   * 
   * @param baseCurrency 
   * retrive all currencies depends on base currency
   */
  getAllCurrency(baseCurrency:string){
    console.log(baseCurrency)
    // this.subscription.add(this.api.currencyApi(baseCurrency).subscribe((curr)=>{
    //   if(curr){
    //     this.currencies = curr
    //   }
    //   return curr
    // }))
  }
}
