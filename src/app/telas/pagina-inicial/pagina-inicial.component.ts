import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "../utils/header/header.component";
import { CardsComponent } from "../utils/cards/cards.component";

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CardsComponent,
  ],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss'
})
export class PaginaInicialComponent implements OnInit {

  constructor() {}

  ngOnInit(): void { }
}
