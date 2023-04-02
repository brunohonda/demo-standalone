import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { CourseService } from '@shared/services/course/course.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, EmptyComponent],
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  courses$ = this.service.get();

  constructor(
    private readonly service: CourseService
  ) {}
}
