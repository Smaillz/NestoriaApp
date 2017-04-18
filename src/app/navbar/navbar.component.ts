import {Input, Component, ElementRef, Output, EventEmitter} from "@angular/core";
import {listOfCities} from 'app/cities';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavBarComponent {

  @Output() sendPage = new EventEmitter<any>();

  public query: string;
  public cities: string[] = listOfCities;
  public filteredList: string[];
  public elementRef: ElementRef;
  private countFilterValue: number = 0;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }

  filter() {
    if (this.query !== "") {
      this.filteredList = this.cities.filter(function (el) {
        let pos = el.toLowerCase().indexOf(this.query.toLowerCase());
        if (pos == 0 && this.countFilterValue < 10) {
          this.countFilterValue++;
          return true;
        } else {
          return false;
        }
      }.bind(this));
    } else {
      this.filteredList = [];
    }
    this.countFilterValue = 0;
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
    this.goTo(1,item);
  }

  goTo(selectPage: number = 1, selectCity: string = "London") {
    this.filteredList = [];
    this.sendPage.emit({
      page: selectPage,
      city: selectCity
    });
  }
}


