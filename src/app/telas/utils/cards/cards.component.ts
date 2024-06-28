import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

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

  constructor() {}

  ngOnInit(): void { }

  private formatarReal(valor: number): string {
    const valorFormatado = valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return `R$ ${valorFormatado}`;
  }

  public estabelecimentos = [
    { nomeEstabelecimento: "Loja do Marcos", dataTransacao: new Date(), valorTransacao: this.formatarReal(-35.50), valorNumber: -35.50 },
    { nomeEstabelecimento: "Marcos Reus", dataTransacao: new Date(), valorTransacao: this.formatarReal(27.83), valorNumber: 27.83 },
    { nomeEstabelecimento: "Loja do Neymar", dataTransacao: new Date(), valorTransacao: this.formatarReal(-27.83), valorNumber: -27.83 },
    { nomeEstabelecimento: "Neymar da Silva", dataTransacao: new Date(), valorTransacao: this.formatarReal(-7.50), valorNumber: -7.50 }
  ]
}
