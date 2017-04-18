import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Observable} from "rxjs/Observable";
import {SearchParametrs} from "../models/ResponseBuildings";

@Injectable()
export class HttpService {
  myUrl: string = 'https://api.nestoria.co.uk/api';
  params: CustomParams = new CustomParams();

  constructor(private http: Http) {
  }

  //get request on server and return Observable
  getData(parametrs : SearchParametrs) {
    this.params.page = parametrs.page;
    this.params.place_name = parametrs.city;
    return this.http.get(this.myUrl, this.makeRequest(this.params))
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  // return RequestOptions with inject parametrs
  makeRequest(paramObj: any): RequestOptions {
    let oprions = new URLSearchParams();
    for (let val in paramObj) {
      oprions.set(val, paramObj[val]);
    }
    let requestOptions = new RequestOptions();
    requestOptions.search = oprions;
    return requestOptions;
  }
}

export class CustomParams {
  country: string = 'uk';
  pretty: string = '1';
  action: string = 'search_listings';
  encoding: string = 'json';
  page: number = 1;
  place_name: string = 'London';
}



