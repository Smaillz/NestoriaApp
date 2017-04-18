import {Component, NgZone, OnInit} from '@angular/core';
import {Response} from '@angular/http'
import {HttpService} from "./servise/http.service";
import {Building, ResponseBuildings, SearchParametrs} from "./models/ResponseBuildings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]

})
export class AppComponent implements OnInit {

  jsonResponse: ResponseBuildings;
  buildingsList: Building[];
  locations: string;
  loading: boolean = false;
  emptyLocation: boolean;

  constructor(private httpService: HttpService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
  }

  goTop(){
    let currPos = window.scrollY;
    let intervalId = setInterval(() => {
      if(currPos<100){
        clearInterval(intervalId)
      }
      currPos = currPos-100;
      window.scroll(0,currPos);
    }, 10)
  }

  send(searchParam: SearchParametrs) {
    this.loading = true;
    this.httpService.getData(searchParam).subscribe((resp: Response) => {
      this.ngZone.run(() => {
        this.jsonResponse = resp.json();
        this.buildingsList = this.jsonResponse.response.listings;
        this.locations = this.jsonResponse.request.location;
        this.loading = false;
        if(this.jsonResponse.response.application_response_text == 'unknown location'){
          this.emptyLocation =true;
        }else {
          this.emptyLocation = false;
        }
      });
    })
  }
}

