import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'show-modal',
  templateUrl: './show-modal.component.html',
  styleUrls: ['./show-modal.component.scss']
})
export class ShowModalComponent implements OnInit  {
  @Output() refreshPostList: EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }


  emitRefresh(event: boolean) {
    this.refreshPostList.emit(event);
    // $('#postsModal').hide()
  }
}
