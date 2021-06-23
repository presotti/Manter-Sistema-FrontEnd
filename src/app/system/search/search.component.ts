import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'system-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pesquisar = 'Pesquisar';
  novo = 'Novo Sistema';
  limpar = 'Limpar';

  constructor() { }

  ngOnInit(): void {
  }

}
