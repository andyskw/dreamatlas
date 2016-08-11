import { Component, OnInit } from '@angular/core';
import {Dream} from "../shared/models/dream.interface";

@Component({
  selector: 'app-dream-list',
  templateUrl: 'dream-list.component.html',
  styleUrls: ['dream-list.component.css']
})
export class DreamListComponent implements OnInit {

  dreams: Dream[];
  constructor() {
    this.dreams = [];
    this.dreams.push({name: 'almafa', description: 'aaaa', price: 300, currentlyCovered: 200, imageUrl: "http://p2.vatera.hu/photos/fa/8a/fe98_1_300.jpg?v2"});
  }

  ngOnInit() {
  }

}
