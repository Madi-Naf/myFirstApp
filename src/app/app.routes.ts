import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MovieComponent } from './movie/movie.component';

const ROUTES: Routes = [
    { path: '',
      redirectTo: '/profile',
      pathMatch: 'full'
    },
    { path: 'profile',
     component: UserProfileComponent,
     pathMatch: 'full'
    },
    { path: 'sign-up',
     component: SignUpComponent
     ,pathMatch: 'full'},
     {
       path: 'movie',
       component: MovieComponent,
       pathMatch: 'full'
     }
];

export { ROUTES };