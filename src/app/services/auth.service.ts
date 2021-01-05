import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data$ = new BehaviorSubject<User>(undefined);
  user$ = new BehaviorSubject<any>(undefined);
  private firestoreSubscription: Subscription;
  private signedIn: boolean = false;
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.afAuth.authState
      .subscribe((user) => {
        this.user$.next(user);
        if (user && user.uid) {
          this.subscribeFirestore(user.uid);
          this.signedIn = true;
        } else {
          this.unsubscribeFirestore();
          this.signedIn = false;
        }
      });
  }

  private subscribeFirestore(uid: string): void {
    this.unsubscribeFirestore();
    this.firestoreSubscription = this.firestore.doc<User>(`user/${uid}`).valueChanges().subscribe((user: User) => {
      this.user$.next(user);
    });
  }

  private unsubscribeFirestore() {
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

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
}
