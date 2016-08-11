export interface IDream {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  currentlyCovered:  number;
  getPercentageReady() : number;
}
