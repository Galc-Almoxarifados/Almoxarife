import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {
  produtos: any[] = [
    { id: 1, nome: 'Produto 1', emManutencao: false },
    { id: 2, nome: 'Produto 2', emManutencao: true },
    { id: 3, nome: 'Produto 3', emManutencao: false }
  ];
  filtroStatus: string = 'todos';
  produtosFiltrados: any[] = [];

  // ngOnInit() {
  //   this.filtrarProdutos();
  // }

  filtrarProdutos() {
    switch (this.filtroStatus) {
      case 'todos':
        this.produtosFiltrados = this.produtos;
        break;
      case 'disponiveis':
        this.produtosFiltrados = this.produtos.filter(produto => !produto.emManutencao);
        break;
      case 'emuso':
        this.produtosFiltrados = this.produtos.filter(produto => produto.emManutencao);
        break;
      case 'manutencao':
        this.produtosFiltrados = this.produtos.filter(produto => produto.emManutencao);
        break;
      default:
        this.produtosFiltrados = this.produtos;
    }
  }
}

