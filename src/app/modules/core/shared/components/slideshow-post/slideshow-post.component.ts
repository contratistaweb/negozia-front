import { Component } from '@angular/core';
import {DynamicPost, PostInterface} from "../../../interfaces/post.interface";

@Component({
  selector: 'slideshow-post',
  templateUrl: './slideshow-post.component.html',
  styleUrls: ['./slideshow-post.component.scss']
})
export class SlideshowPostComponent implements DynamicPost {
  data!: PostInterface;

  constructor() { }

}
