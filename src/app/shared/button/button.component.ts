import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() name='';
  @Input() color='';
  @Output() inserir = new EventEmitter<any>();

  icon = '';

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal(systemTemplate: TemplateRef<any>){
    console.log('button');
    this.inserir.emit(systemTemplate);
  }

}
