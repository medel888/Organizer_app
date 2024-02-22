import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component'), 
        title: 'Home'
    },{
        path: 'task',
        loadComponent: () => import('./pages/task-detail/task-detail.component'),
        title: 'Task'
    },{
        path: '**',
        redirectTo: 'home'
    }
];
