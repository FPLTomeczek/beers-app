export interface Beer {
  id: number;
  name: string;
  image_url: string;
  tagline: string;
  description: string;
  abv: string;
  ibu: string;
}

export interface Malt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

export interface Hop extends Malt {
  add: string;
  attribute: string;
}
