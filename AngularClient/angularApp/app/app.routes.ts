import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'about', loadChildren: './modules/about/about.module#AboutModule',
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
