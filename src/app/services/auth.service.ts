import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserData } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data$ = new BehaviorSubject<UserData>(undefined);
  user$ = new BehaviorSubject<firebase.User>(undefined);
  private firestoreSubscription: Subscription;
  private signedIn = false;
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.afAuth.authState
      .subscribe((user) => {
        this.user$.next(user);
        if (user && user.uid) {
          this.subscribeFirestore(user.uid);
          this.signedIn = true;
          this.router.navigate(['']);
        } else {
          this.unsubscribeFirestore();
          this.signedIn = false;
          this.router.navigate(['login']);
        }
      });
  }

  private subscribeFirestore(uid: string): void {
    this.unsubscribeFirestore();
    this.firestoreSubscription = this.firestore.doc<UserData>(`users/${uid}`).valueChanges().subscribe((user: UserData) => {
      this.data$.next(user);
    });
  }

  private unsubscribeFirestore(): void {
    if (this.firestoreSubscription) {
      this.firestoreSubscription.unsubscribe();
    }
    this.data$.next(null);
  }

  isSignedIn(): boolean {
    return this.signedIn;
  }

  signOut(): void {
    this.afAuth.signOut();
  }

  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  getVerificationEmail(): void {
    const user = this.user$.getValue();
    if (user) {
      user.sendEmailVerification();
    }
    this.user$.getValue().sendEmailVerification();
  }
}
