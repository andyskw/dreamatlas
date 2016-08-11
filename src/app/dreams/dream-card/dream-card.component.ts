import {Component, OnInit, Input} from '@angular/core';
import {Dream} from "../shared/models/dream.interface";

@Component({
  selector: 'app-dream-card',
  templateUrl: 'dream-card.component.html',
  styleUrls: ['dream-card.component.css']
})
export class DreamCardComponent implements OnInit {

  @Input('dream')
  dream: Dream;
  constructor() { }

  ngOnInit() {
  }

}
