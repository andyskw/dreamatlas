import {IDream} from "./dream.interface";
export class Dream implements IDream {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  currentlyCovered:  number;

  constructor({name, description, imageUrl, price, currentlyCovered}) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl ? imageUrl : null;
    this.price = price;
    this.currentlyCovered = currentlyCovered;
  }

  getPercentageReady() : number {
    return this.currentlyCovered/this.price*100;
  }


}
