import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/task-list/task-list.component'), 
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
