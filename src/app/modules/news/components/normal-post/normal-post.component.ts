import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../../core/interfaces/post.interface";

@Component({
  selector: 'normal-post',
  templateUrl: './normal-post.component.html',
  styleUrls: ['./normal-post.component.scss']
})
export class NormalPostComponent implements OnInit {

  @Input() post!: PostInterface;

  ngOnInit(): void {
  }


}
