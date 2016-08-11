import {Component, OnInit, Input} from '@angular/core';
import {IDream} from "../shared/models/dream.interface";

@Component({
  selector: 'app-dream-card',
  templateUrl: 'dream-card.component.html',
  styleUrls: ['dream-card.component.css']
})
export class DreamCardComponent implements OnInit {

  @Input('dream')
  dream: IDream;
  constructor() { }

  ngOnInit() {
  }

  addCover() {
    this.dream.currentlyCovered += 10000;
    if (this.dream.currentlyCovered > this.dream.price) {
      this.dream.currentlyCovered = this.dream.price;
    }
  }

  removeCover() {
    this.dream.currentlyCovered -= 10000;
    if (this.dream.currentlyCovered < 0) {
      this.dream.currentlyCovered = 0;
    }
  }

}
