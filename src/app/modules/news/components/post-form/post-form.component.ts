import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../../core/services/posts.service";

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() refreshList: EventEmitter<boolean> = new EventEmitter<boolean>()
  postForm: FormGroup = new FormGroup({});
  options: string[] = ['normal','slideshow'];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly postsService: PostsService,
    ) { }

  ngOnInit(): void {
    this.newFormPost()
    this.addImage()
  }

  newFormPost() {
    this.postForm =  this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      type: new FormControl(this.options[0], [Validators.required]),
      tags: new FormControl('', [Validators.required]),
      images: this.formBuilder.array([]),
    })
  }

  get images(): FormArray{
    return this.postForm.controls['images'] as FormArray;
  }

  newPost() {
    this.postsService.addNewPost(this.postForm.value).subscribe({
      'next': () => this.refreshList.emit(true),
      'error': error => console.log(error),
    })
  }

  addImage() {
    const image = this.formBuilder.group({
      imageTitle:['', [Validators.required]],
      imageUrl:['', [Validators.required]],
    })
    this.images.push(image);
  }

  removeImage(index: number) {
    this.images.removeAt(index);
  }

  emitEvent(){
    this.refreshList.emit(true);
  }
}
