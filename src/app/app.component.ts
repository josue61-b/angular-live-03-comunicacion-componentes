import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsPageComponent } from './pages/students-page/students-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-live-03-comunicacion-components';
}
