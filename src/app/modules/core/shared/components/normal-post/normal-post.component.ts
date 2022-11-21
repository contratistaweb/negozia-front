import { Component } from '@angular/core';
import {DynamicPost, PostInterface} from "../../../interfaces/post.interface";

@Component({
  selector: 'normal-post',
  templateUrl: './normal-post.component.html',
  styleUrls: ['./normal-post.component.scss']
})
export class NormalPostComponent implements DynamicPost{

  data!: PostInterface;
  constructor() { }




}
