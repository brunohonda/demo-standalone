import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h2>Alunos</h2>
    <router-outlet></router-outlet>
  `,
})
export class StudentsComponent {}
