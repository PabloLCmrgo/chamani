import { Routes } from '@angular/router';


import { MateriaPrimaComponent } from './materia-prima.component';

export const MateriaPrimaRoutes: Routes = [
	{
		path: '',
		component: MateriaPrimaComponent,
		data: {
			title: 'materia_Prima',
			urls: [
				{ title: 'materia_Prima', url: '/dashboard' },
				{ title: 'ngComponent' },
				{ title: 'materia_Prima' }
			]
		}
	}
];

