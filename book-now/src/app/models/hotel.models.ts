export class Hotel {

    public id: number;
    public name: string;
    public location : string;
    public price: string;
    public rating : number;
  
    constructor(
      id?: number,
      name?: string,
      location?: string,
      price?: string,
      rating?: number){
  
        this.id = id || 0;
        this.name = name || '';
        this.location = location || '';
        this.price = price || '';
        this.rating = rating || 0;
  
    }
  
  }
  