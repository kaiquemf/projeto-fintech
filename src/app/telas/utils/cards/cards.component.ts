import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import { MatDialog } from "@angular/material/dialog";

import {DetalhesTransferenciaComponent} from "../../detalhes-transferencia/detalhes-transferencia.component";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void { }

  private formatarReal(valor: number): string {
    const valorAbsoluto = Math.abs(valor);
    const valorFormatado = valorAbsoluto.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    const sinal = valor < 0 ? '-' : '';
    return `${sinal}R$ ${valorFormatado}`;
  }

  public estabelecimentos = [
    { id: 0, nomeEstabelecimento: "Loja do Marcos", dataTransacao: new Date(), valorTransacao: this.formatarReal(-35.50), valorNumber: -35.50, observacao: 'Estava devendo de uma outra compra' },
    { id: 1, nomeEstabelecimento: "Marcos Reus", dataTransacao: new Date(), valorTransacao: this.formatarReal(27.83), valorNumber: 27.83, observacao: 'Pagamento de um lanche' },
    { id: 2, nomeEstabelecimento: "Loja do Neymar", dataTransacao: new Date(), valorTransacao: this.formatarReal(-27.83), valorNumber: -27.83, observacao: 'Compra de sorvetes' },
    { id: 3, nomeEstabelecimento: "Neymar da Silva", dataTransacao: new Date(), valorTransacao: this.formatarReal(7.50), valorNumber: -7.50, observacao: 'Aposta' }
  ]

  public abrirDialogDetalhesTransferencia(estabelecimento: any): void {
    console.log(estabelecimento);
    this.dialog.open( DetalhesTransferenciaComponent, {
      data: estabelecimento
    })
  }
}
