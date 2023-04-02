import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CoursesService } from '../services/courses.service';
import { EmptyComponent } from '../../shared/components/empty/empty.component';

@Component({
  standalone: true,
  imports: [CommonModule, EmptyComponent],
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  courses$ = this.service.get();

  constructor(
    private readonly service: CoursesService
  ) {}
}
