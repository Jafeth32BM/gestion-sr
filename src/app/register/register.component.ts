import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  errorMessage: string;
  loading: boolean;

  constructor(private auth: AuthService, private firestore: AngularFirestore) {}

  submit(): void {
    const { email, password, password2 } = this.registerForm.value;
    if (password === password2) {
      this.loading = true;
      this.registerForm.disable();
      this.register(email, password);
    } else {
      this.showErrorMessage('Passwords are not identical');
    }
  }

  private async register(email: string, password: string): Promise<void> {
    try {
      const credentials = await this.auth.register(email, password);
      this.sendVerificationEmail(credentials);
      await this.firestore.collection('users').doc(credentials.user.uid).set({
        admin: false,
        email: credentials.user.email,
        uid: credentials.user.uid,
        documentos: {},
      });
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

  private sendVerificationEmail(
    credentials: firebase.auth.UserCredential
  ): void {
    try {
      credentials.user.sendEmailVerification();
    } catch {}
  }
}
