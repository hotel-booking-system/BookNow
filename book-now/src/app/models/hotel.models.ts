export class Hotel {
  public id: number;
  public title: string;
  public location: string;
  public description: string;
  public price: string;
  public images: File[]; // Adicionando uma nova propriedade para os arquivos de imagem

  constructor(
    id?: number,
    title?: string,
    location?: string,
    description?: string,
    price?: string,
    images?: File[] // Adicionando os arquivos de imagem ao construtor
  ) {
    this.id = id || 0;
    this.title = title || '';
    this.location = location || '';
    this.description = description || '';
    this.price = price || '';
    this.images = images || []; // Inicializando os arquivos de imagem
  }
}
