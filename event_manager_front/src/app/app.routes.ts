import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'organizer',
        loadComponent: () => import('./organizer/organizer.component'),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./organizer/pages//home/home.component'), 
                title: 'Organiador'
            },{
                path: 'all',
                loadComponent: () => import('./organizer/pages/all-task/all-task.component'),
                title: 'Todas las tareas'
            },{
                path: 'scheduled',
                loadComponent: () => import('./organizer/pages/scheduled-task/scheduled-task.component'),
                title: 'Tareas programadas'
            },{
                path: 'important',
                loadComponent: () => import('./organizer/pages/important-task/important-task.component'),
                title: 'Tareas importantes'
            },{
                path: 'completed',
                loadComponent: () => import('./organizer/pages/completed-task/completed-task.component'),
                title: 'Tareas completadas'
            },{
                path: 'add',
                loadComponent: () => import('./organizer/pages/add-task/add-task.component'),
                title: 'Agregar tarea'
            },{
                path: 'categories',
                loadComponent: () => import('./organizer/pages/categories/categories.component'),
                title: 'Categorias'
            }
        ]
    },{
        path: '**',
        redirectTo: 'organizer/home'
    }
];
