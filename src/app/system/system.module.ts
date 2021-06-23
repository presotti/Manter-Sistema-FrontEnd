import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search/search.component";
import {FilterComponent} from "./form/filter/filter.component";
import {ButtonComponent} from "../shared/button/button.component";
import {ResultComponent} from "./form/result/result.component";
import {ControlSystemComponent} from './form/control-system/control-system.component';
import {UpdateComponent} from './update/update.component';
import {HeaderComponent} from "../shared/header/header.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    ButtonComponent,
    ResultComponent,
    ControlSystemComponent,
    UpdateComponent,
    HeaderComponent,
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    NgbDatepickerModule
  ]
})
export class SystemModule { }
