import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { NgbModule, NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgPipesModule } from 'ngx-pipes';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    FormModule,
    FormsModule,
    InvoicesRoutingModule,
    UIModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgSelectModule,
    NgPipesModule,
    NgbModule,
    FlatpickrModule.forRoot()
  ]
})
export class InvoicesModule { }
