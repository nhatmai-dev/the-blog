import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';


const appRoutes: Routes = [
    {path: 'home', component: FeedComponent},
    {path: 'feed', component: FeedComponent},
    { path: 'about', component: BiographyComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];

export const AppRouterModule = RouterModule.forRoot(appRoutes);
