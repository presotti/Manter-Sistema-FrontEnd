import {Component, Input, OnInit} from '@angular/core';
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'buttons',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() name='';
  @Input() color='';

  icon = '';

  constructor() { }

  ngOnInit(): void {
  }

}
