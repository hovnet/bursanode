import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class PriceService {

  EndPointUrl:string = 'http://localhost:8080/main';
  // returnvalue:any=null;
  constructor(private http: HttpClient) { }

  ngOnInit(){}

  getname(){
    return this.http.get<any>(this.EndPointUrl);
  }

  getprice(stock:any) {
    return this.http.get<any>(this.EndPointUrl + '?stock=' + stock);
  }
}
