import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Estudiante } from '../../../models';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent {
  /**
   * Indicamos que vamos a recibir "data" de el componente Padre
   */
  @Input()
  data: Estudiante[] = [];
}
