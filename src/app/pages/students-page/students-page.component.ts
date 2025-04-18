import { Component } from '@angular/core';
import { Estudiante } from '../../models';
import { StudentListComponent } from '../../shared/components/student-list/student-list.component';
import { StudentFormComponent } from '../../shared/components/student-form/student-form.component';

@Component({
  selector: 'app-students-page',
  imports: [StudentListComponent, StudentFormComponent],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss',
})
export class StudentsPageComponent {
  estudiantesAprobados: Estudiante[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
    },
    {
      id: 2,
      apellido: 'Gómez',
      nombre: 'Ana',
    },
    {
      id: 3,
      nombre: 'Luis',
      apellido: 'Martínez',
    },
  ];

  estudiantesDesaprobados: Estudiante[] = [
    {
      id: 4,
      nombre: 'María',
      apellido: 'López',
    },
    {
      id: 5,
      apellido: 'Fernández',
      nombre: 'Carlos',
    },
  ];

  estudiantesAusentes: Estudiante[] = [
    {
      id: 6,
      apellido: 'Ramírez',
      nombre: 'Sofía',
    },
    {
      id: 7,
      nombre: 'Diego',
      apellido: 'Torres',
    },
    {
      id: 8,
      apellido: 'Hernández',
      nombre: 'Valentina',
    },
  ];

  onDeleteAprobado(id: number): void {
    console.log('Recibimos el evento "delete" de Aprobado. ID: ', id);

    this.estudiantesAprobados = this.estudiantesAprobados.filter(
      (estudiante) => estudiante.id !== id
    );
  }

  onDeleteDesaprobado(id: number): void {
    console.log('Recibimos el evento "delete" de Desaprobado. ID: ', id);

    this.estudiantesDesaprobados = this.estudiantesDesaprobados.filter(
      (estudiante) => estudiante.id !== id
    );
  }

  onDeleteAusente(id: number): void {
    console.log('Recibimos el evento "delete" de Ausente. ID: ', id);
    this.estudiantesAusentes = this.estudiantesAusentes.filter(
      (estudiante) => estudiante.id !== id
    );
  }
}
