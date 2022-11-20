import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { NormalPostComponent } from './components/normal-post/normal-post.component';
import { NewsLayoutComponent } from './components/news-layout/news-layout.component';


@NgModule({
  declarations: [
    PostListComponent,
    NormalPostComponent,
    NewsLayoutComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
