import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'resume',
        loadComponent: () => import('./resume/resume.component'),
      },
      {
        path: 'linkedin',
        loadComponent: () =>
          import('./linkedin-profile/linkedin-profile.component'),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./sample-projects/sample-projects.component'),
      },
    ],
  },
];

export default routes;
