import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BiographyComponent } from './features/biography/biography.component';
import { PageNotFoundComponent } from './elements/common-components/page-not-found/page-not-found.component';
import { AppRouterModule } from './app.routes';
import { FeedComponent } from './features/feed/feed.component';
import { NavibarComponent } from './elements/common-components/navibar/navibar.component';
import { ArticlePreviewComponent } from './elements/common-components/article-preview/article-preview.component';
import { ArticleDetailComponent } from './elements/common-components/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    PageNotFoundComponent,
    FeedComponent,
    NavibarComponent,
    ArticlePreviewComponent,
    ArticleDetailComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
