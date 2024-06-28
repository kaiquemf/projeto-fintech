import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() nomeTela: string = '';
  @Input() temCriacao: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
