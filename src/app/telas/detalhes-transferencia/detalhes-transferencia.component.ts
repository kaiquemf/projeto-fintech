import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-detalhes-transferencia',
  standalone: true,
  imports: [],
  templateUrl: './detalhes-transferencia.component.html',
  styleUrl: './detalhes-transferencia.component.scss'
})
export class DetalhesTransferenciaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, protected dialog: MatDialog) {
  }
}
