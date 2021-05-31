import { Routes } from '@angular/router';


import { ProductosComponent } from './productos.component';

export const ProductosRoutes: Routes = [
	{
		path: '',
		component: ProductosComponent,
		data: {
			title: 'productos',
			urls: [
				{ title: 'productos', url: '/dashboard' },
				{ title: 'ngComponent' },
				{ title: 'productos' }
			]
		}
	}
];

