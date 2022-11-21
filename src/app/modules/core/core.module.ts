import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.service";
import {PostHostDirective} from "./directives/post-host.directive";



@NgModule({
  declarations: [PostHostDirective ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [PostsService],
  exports: [
    PostHostDirective
  ]
})
export class CoreModule { }
