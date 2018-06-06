import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './features/biography/biography.component';
import { PageNotFoundComponent } from './elements/common-components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { FeedComponent } from './features/feed/feed.component';



const appRoutes: Routes = [
    { path: 'feed', component: FeedComponent },
    { path: 'about', component: BiographyComponent },
    { path: 'home', redirectTo: '/feed', pathMatch: 'full' },
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

export const AppRouterModule = RouterModule.forRoot(appRoutes);
