import { Component, OnInit } from '@angular/core';
import {Dream} from "../shared/models/dream.class";
import {IDream} from "../shared/models/dream.interface";
import {LocalStorage} from "angular2-localstorage/WebStorage";

@Component({
  selector: 'app-dream-list',
  templateUrl: 'dream-list.component.html',
  styleUrls: ['dream-list.component.css']
})
export class DreamListComponent implements OnInit {

  @LocalStorage('dreamAtlasDreams')
  dreams: IDream[] = [];
  @LocalStorage('dreamAtlasWalletNumber')
  wallet: number = 6000000;
  constructor() {
    if (!this.dreams.length) {
      this.dreams.push(new Dream({name: 'Szalonasztal', description: 'Egy szep szalonasztal a nappaliba, amit minden nap tudunk hasznalni', price: 90000, currentlyCovered: 90000, imageUrl: "http://p2.vatera.hu/photos/fa/8a/fe98_1_300.jpg?v2"}));
      this.dreams.push(new Dream({name: 'Utazas - idei', description: 'Utazas a napfenyes Riomaggiore videkere sajat autoval.', price: 400000, currentlyCovered: 400000, imageUrl: "http://i.huffpost.com/gen/1478845/thumbs/o-136681404-900.jpg?1"}));
      this.dreams.push(new Dream({name: 'PS4', description: 'Hogy tudjunk mivel jatszani az unalmas teli ejszakakon.', price: 120000, currentlyCovered: 20000, imageUrl: "http://www.technokrata.hu/uploads/2015/12/playstation4-250-update.jpg"}));
      this.dreams.push(new Dream({name: 'Angol tanfolyam', description: 'It is essential to speak English well.', price: 50000, currentlyCovered: 30000, imageUrl: "http://www.international-programs.com/core-english-in-vancouver-at-vanwest-college-9824de25c76916744e495d353129b223.jpg"}));
      this.dreams.push(new Dream({name: 'Utazás Ázsia 2017', description: 'Teri makassi.', price: 700000, currentlyCovered: 100000, imageUrl: "https://i.ytimg.com/vi/ZP2nKrhEU68/maxresdefault.jpg"}));
      this.dreams.push(new Dream({name: 'Autó', description: 'Hogy legyen, ami elvisz minket A-bol B-be!', price: 2500000, currentlyCovered: 600000, imageUrl: "http://www.toyotaveszprem.hu/wp-content/uploads/2015/06/toyota-auris-touring-sports-2015-interior-tme-018-a-full_tcm-3033-388427.jpg"}));
      this.dreams.push(new Dream({name: 'Tesla Model 3', description: 'Mert megerdemeljuk!', price: 12000000, currentlyCovered: 0, imageUrl: "http://c1cleantechnicacom.wpengine.netdna-cdn.com/files/2016/04/model3_quarter_mod2-1.png"}));
      this.dreams.push(new Dream({name: 'Lakás kiadásra', description: 'Passziv jovedelemre fel!', price: 15000000, currentlyCovered: 1600000, imageUrl: "http://lakbermagazin.hu/images/stories/gallery/cikkek/lakberendezo-munkak/kiado-lakas/kiado_lakas_milyen_legyen_a_lakberendezes_07.jpg"}));
    } else {
        this.dreams = this.dreams.map(dream => new Dream(dream));
    }

  }

  ngOnInit() {
  }

}
