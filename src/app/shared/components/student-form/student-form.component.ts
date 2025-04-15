import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss',
})
export class StudentFormComponent {
  studentForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.studentForm.invalid) {
      alert('Formulario inválido');
    } else {
      console.log(this.studentForm.value);
    }
  }

  passwordIsValid() {
    return (
      this.studentForm.get('password')?.valid &&
      this.studentForm.get('password')?.touched
    );
  }
  passwordIsInvalid() {
    return (
      this.studentForm.get('password')?.invalid &&
      this.studentForm.get('password')?.touched
    );
  }

  passwordHasRequiredError() {
    /**
     * required
     * minlength
     * maxlength
     * pattern
     * email
     * min
     * max
     */

    return this.studentForm.get('password')?.hasError('required');
  }

  passwordHasMinLengthError() {
    return this.studentForm.get('password')?.hasError('minlength');
  }
}
