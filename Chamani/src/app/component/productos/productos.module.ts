import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosRoutes } from './productos.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductosRoutes)
  ]
})
export class ProductosModule { }
