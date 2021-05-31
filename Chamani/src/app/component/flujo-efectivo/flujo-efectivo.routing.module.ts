import { Routes } from '@angular/router';


import { FlujoEfectivoComponent } from './flujo-efectivo.component';

export const FlujoDeEfectivoRoutes: Routes = [
	{
		path: '',
		component: FlujoEfectivoComponent,
		data: {
			title: 'flujo_efectivo',
			urls: [
				{ title: 'flujo_efectivo', url: '/dashboard' },
				{ title: 'ngComponent' },
				{ title: 'flujo_efectivo' }
			]
		}
	}
];

