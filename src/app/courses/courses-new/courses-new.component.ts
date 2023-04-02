import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CategoryService } from './../services/category/category.service';
import { CourseService } from './../services/course/course.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.scss']
})
export class CoursesNewComponent {
  form = this.buildForm();
  categories$ = this.categoryService.get();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly categoryService: CategoryService,
    private readonly service: CourseService,
  ) {}

  public createCourse() {
    this.service
      .create(this.form.getRawValue())
      .subscribe();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [ '', Validators.required ],
      category: [ '', Validators.required ],
    });
  }
}
