import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'products',
		loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
	},
	{
		path: 'services',
		loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'products'
	}
];
