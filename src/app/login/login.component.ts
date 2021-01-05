import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  errorMessage: string;
  loading: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  async submit(): Promise<void> {
    const { email, password } = this.registerForm.value;
    this.loading = true;
    this.registerForm.disable();
    try {
      await this.auth.signIn(email, password);
    } catch (e) {
      this.showErrorMessage(e.message);
      this.loading = false;
      this.registerForm.enable();
    }
  }

  private showErrorMessage(message: string): void {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = undefined;
    }, 5000);
  }
}
