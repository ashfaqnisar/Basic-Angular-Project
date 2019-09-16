import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";

@Component({
  selector:"pm-star",
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;

  //As we have to send the event to the parent container regarding the details of the clicked rating
  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
    this.starWidth = this.rating*75/5;
  }

  OnClick():void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
  }
}
