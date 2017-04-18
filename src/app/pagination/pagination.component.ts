import {Input, Component, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'pagination-build',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input() currentCity: string;
  @Input() totalPages: number;
  @Input() currentPage: number;
  @Output() sendPage = new EventEmitter<any>();

  pageArr: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.getPaginationsNum();
  }

  goTo(selectPage: number = 1, selectCity: string = this.currentCity) {
    this.sendPage.emit({
      page: selectPage,
      city: selectCity
    });
  }

  getPaginationsNum() {
    this.pageArr = [];
    if (this.totalPages > 7) {
      if (this.currentPage <= 4) {
        for (let i = 1; i <= 7; i++) {
          this.pageArr.push(i);
        }
      } else if (this.currentPage > 4 && this.currentPage < this.totalPages - 4) {
        let tmp = this.currentPage - 4;
        for (let i = 1; i <= 7; i++) {
          this.pageArr.push(tmp + i);
        }
      } else if (this.currentPage >= this.totalPages - 4) {
        for (let i = 0; i < 7; i++) {
          this.pageArr.push(this.totalPages - 6 + i);
        }
      }
    }else{
      for(let i=1;i<=7;i++){
        this.pageArr.push(i);
      }
    }
  }
}
