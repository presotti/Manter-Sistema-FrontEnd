import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'form-filter-insert',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() titulo = '';

  constructor() { }

  ngOnInit(): void {
  }

}
