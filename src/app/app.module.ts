import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BiographyComponent } from './features/biography/biography.component';
import { PageNotFoundComponent } from './elements/page-not-found/page-not-found.component';
import { AppRouterModule } from './app.routes';
import { FeedComponent } from './features/feed/feed.component';
import { NavibarComponent } from './elements/navibar/navibar.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    PageNotFoundComponent,
    FeedComponent,
    NavibarComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
