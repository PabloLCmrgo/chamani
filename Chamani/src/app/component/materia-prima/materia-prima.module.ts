import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaPrimaComponent } from './materia-prima.component';
import { MateriaPrimaRoutes } from './materia_prima.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MateriaPrimaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MateriaPrimaRoutes)
  ]
})
export class MateriaPrimaModule { }
