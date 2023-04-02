import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmptyComponent } from '@shared/components/empty/empty.component';
import { StudentService } from '@shared/services/student/student.service';

@Component({
  standalone: true,
  imports: [CommonModule, EmptyComponent],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export default class StudentListComponent {
  students$ = this.service.get();

  constructor(
    private readonly service: StudentService
  ) {}
}
