import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';

@Component({
  selector: 'app-total-carrinho-compras',
  templateUrl: './total-carrinho-compras.component.html',
  styleUrls: ['./total-carrinho-compras.component.css']
})
export class TotalCarrinhoComprasComponent implements OnInit {

  total: number = 0;

  constructor(
    private carrinhoComprasService: CarrinhoComprasService
  ) { }

  ngOnInit(): void {
    //obter o total do carrinho de compras
    var carrinho = this.carrinhoComprasService.obterCarrinhoDeCompras();
    this.total = carrinho.valorTotal;
  }

}
