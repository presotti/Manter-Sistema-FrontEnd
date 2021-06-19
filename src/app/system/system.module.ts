import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search/search.component";
import {FilterComponent} from "./form/filter/filter.component";
import {ButtonComponent} from "../shared/button/button.component";
import {ResultComponent} from "./form/result/result.component";
import { ControlSystemComponent } from './form/control-system/control-system.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    ButtonComponent,
    ResultComponent,
    ControlSystemComponent,
    UpdateComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SystemModule { }
