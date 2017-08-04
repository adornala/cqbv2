import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'event',
    loadChildren: './cqbform.module#CQBResource'
  }
];
export const routing = RouterModule.forRoot(routes);
