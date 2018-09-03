import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './users/user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './core/auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);