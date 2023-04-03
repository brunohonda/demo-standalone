import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
      <h2>Alunos</h2>
      <a [routerLink]="['new']">Novo</a>
    </header>
    <router-outlet></router-outlet>
  `,
})
export class StudentsComponent {}
