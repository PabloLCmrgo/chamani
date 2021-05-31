import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlujoEfectivoComponent } from './flujo-efectivo.component';
import { FlujoDeEfectivoRoutes } from './flujo-efectivo.routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FlujoEfectivoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FlujoDeEfectivoRoutes)
  ]
})
export class FlujoEfectivoModule { }
