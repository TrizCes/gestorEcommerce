export class ProductClass {
  id!: string;
  nome!: string;
  quantidade!: string;
  preco!: string;
  criador?: string;

  constructor(id: string, nome: string, quantidade: string, preco: string, criador?: string) {
    this.id = id;
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
    this.criador = criador;
}
}
