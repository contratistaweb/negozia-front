import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { NewsLayoutComponent } from './components/news-layout/news-layout.component';
import {CoreModule} from "../core/core.module";
import { ShowModalComponent } from './components/show-modal/show-modal.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PostListComponent,
    NewsLayoutComponent,
    ShowModalComponent,
    PostFormComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NewsModule { }
