import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'images-form',
  templateUrl: './images-form.component.html',
  styleUrls: ['./images-form.component.scss']
})
export class ImagesFormComponent implements OnInit {

  @Input() imagesForm!: FormGroup;
  @Input() index!: number;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.imagesForm)
    this.imagesForm = this.formBuilder.group({
      images: this.formBuilder.array([])
    })
  }

  get images(): FormArray {
    return this.imagesForm.controls['images'] as FormArray;
  }

  static addImage() {
    return new FormGroup<{imageTitle: FormControl, imageUrl: FormControl}>({
      imageTitle: new FormControl<string>(''),
      imageUrl: new FormControl<string>(''),
    })
  }

  removeImage(index: number){
    this.images.removeAt(index)
  }

}
