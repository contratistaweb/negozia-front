import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsLayoutComponent} from "./components/news-layout/news-layout.component";
import {PostListComponent} from "./components/post-list/post-list.component";

const routes: Routes = [
  {
    path: '',
    component: NewsLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: PostListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
