import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsColor, Estudiante } from '../../../models';

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

  @Input()
  color: BsColor = 'light';

  @Output()
  delete = new EventEmitter();
}
