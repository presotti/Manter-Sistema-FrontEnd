import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'form-filter-insert',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class FilterComponent implements OnInit {

  @Input() titulo = '';
  pesquisar = 'Pesquisar';
  novo = 'Novo Sistema';
  limpar = 'Limpar';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {size: 'xl'});
  }

  abrirModal(content: TemplateRef<any>) {

  }
}

