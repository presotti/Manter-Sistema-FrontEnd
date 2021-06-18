import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search/search.component";
import {FilterComponent} from "../shared/form/filter/filter.component";
import {ButtonComponent} from "../shared/button/button.component";
import {ResultComponent} from "../shared/form/result/result.component";



@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    ButtonComponent,
    ResultComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SystemModule { }
