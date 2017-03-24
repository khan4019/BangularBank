import {Routes} from '@angular/router';
import {CircularComponent} from './circular/circular.component';
import {SearchComponent} from './search/search.component';
import {UserComponent} from './user/user.component';

export const appRoutes: Routes = [
    {
        path:'circular',
        component: CircularComponent
    },
    {
        path:'search',
        component: SearchComponent
    },
    {
        path: 'user/:userId',
        component: UserComponent
    }
];
