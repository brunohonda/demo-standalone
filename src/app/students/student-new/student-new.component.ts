import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '@shared/services/student/student.service';

@Component({
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.scss']
})
export default class StudentNewComponent {
  form = this.buildForm();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly location: Location,
    private readonly service: StudentService,
  ) {}


  createStudent() {
    this.service
      .create(this.form.getRawValue())
      .subscribe(
        () => this.location.back()
      );
  }

  private buildForm(): FormGroup {
    return this.formBuilder
      .group({
        name: ['', Validators.required ]
      });
  }
}
